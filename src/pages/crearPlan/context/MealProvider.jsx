import {changeMode,searchFood,cleanSearch,addFood,deleteFood,setGoals,setMacros,changeAmount,updateFoodListDB,loadFoods} from './mealActions.js' 
import {updateMealGoalDB} from './APIasyncPostActions.js'

import { calculateMacros, getAlimentosById, putSelectedFoods } from "../api"
import { MealContext } from "./MealContext"
import { mealReducer } from "./mealReducer"

import { useReducer, useState } from "react"
import { useEffect } from "react"
import { useAsyncEffect } from '../../../hooks/useAsyncEffect.js'
import { useParams } from 'react-router-dom'


  function mealReducerInit({foods,goal,name,percentage}){
  console.log('incializando')

    return{
      name:name,
      selectedFoods:foods,
      goal:goal,
      macros: {p:0,c:0,f:0,kcal:0}, // Se inicializa en 0 y luego solo se act con un useEffect solicitando calculo en la API... o deberia dejarlo guardado tmb en DB?...
      //autoCalculate:autoCalculate TODO: Falta mover autoCalculate a cada meal en la DB
      autoCalculate:false,
      percentage:percentage,
      searchFood:[],
      loadFoods:true,
      updateFoodListDB : false,    
     }

  }


export default function MealProvider({children,mealData}) {
  

    //TODO: Rename plan to meal
    const [plan,dispatch] = useReducer(mealReducer,mealData,mealReducerInit)  //mealData se envia como arg a la fn init
    const {planId,dayName} = useParams()


  //send calls to nutriAlgor API and update Macros with the result
  useEffect(()=>{

    
    const getAndShowMacros = async () =>{

      //Adapto los datos para la API
      const foods =  plan.selectedFoods.map(food=>
        ({
         id:food._id,
         selectedAmount:food.selectedAmount,
         c:food.carbs,
         p:food.protein,
         f:food.fat,
         kcal:food.kcal,
         type:food.type,
         category:food.category
       })
       )
       
       plan.autoCalculate == false? 
       mealActions.setMacros(await calculateMacros(foods))
       : null //TODO: llamar a fn autoCalculateFood de la ruta Auto del nutriAlgorithm

    }

    getAndShowMacros()

  },[plan.selectedFoods,plan.autoCalculate])


  //Send to DB selectedFoods
  useAsyncEffect(async()=>{

    if(plan.updateFoodListDB){

      const foods = plan.selectedFoods.map(food=>{
        return {foodId:food._id , amount:food.selectedAmount}
      })
      
      await putSelectedFoods(planId,dayName,plan.name,foods) 

      mealActions.updateFoodListDB()

    }

  },null,[plan.selectedFoods]
  )

  //Los efetos Asincronos PostActions se trataran algunos como una funcion separada, otros mediante depedencias de useEffect

  const mealActions = {
    updateFoodListDB: () => updateFoodListDB(dispatch), //bandera
    loadFoods:(food) => loadFoods(dispatch,food), // f + bandera
    changeMode: () => changeMode(dispatch), //TODO: mod DB
    searchFood: (foodList) => searchFood(dispatch, foodList), //no mod DB
    cleanSearch: () => cleanSearch(dispatch), // no mod DB
    addFood: (food) => {  addFood(dispatch, food)}, //mod DB. async postActions tratada con useEffect (Send to DB selectedFoods)
    deleteFood: (id) => deleteFood(dispatch, id),   //mod DB. async postActions tratada con useEffect (Send to DB selectedFoods)
    changeAmount: (data) => changeAmount(dispatch, data), //mod DB. async postActions tratada con useEffect (Send to DB selectedFoods)
    setGoals: (goals) => {setGoals(dispatch, goals) ; updateMealGoalDB(goals,planId,dayName,plan.name) }, // TODO: mod DB 
    setMacros: (macros) => setMacros(dispatch, macros), //no mod DB (refresca los macros resultados tras solicitar API calculo) ... quizas luego se guarde en DB para no tener que recalcular cada que se carga pagina... pero no creo. Veo posibles conflictos
  };

  return (
    <MealContext.Provider value = {{plan,...mealActions}}>
      {children}
    </MealContext.Provider>
  )
}
 