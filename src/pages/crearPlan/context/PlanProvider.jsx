import { calculateMacros } from "../api"
import { PlanContext } from "./planContext"
import { planReducer } from "./planReducer"

import { useReducer } from "react"
import { useEffect } from "react"

export default function PlanProvider({children}) {

  
  const [plan,dispatch] = useReducer(planReducer,{
    selectedFoods:[],
    goals:{p:0,c:0,f:0,kcal:0},
    macros:{p:0,c:0,f:0,kcal:0},
    distribution:[],
    searchFood:[]
  })


  //Tambien dependera de si se modican los goals o la distribucion... en fin. De todo menos de searchFoods
  // TODO: Quitar searchFoos de este Provider 
  useEffect(()=>{

    const getAndShowMacros = async () =>{

      const foods =  plan.selectedFoods.map(food=>
        ({
         id:food._id,
         //amount:food.amount,     //API sabra si data es acorde a 100 o 1 segun <type>
         selectedAmount:food.selectedAmount,
         c:food.carbs,
         p:food.protein,
         f:food.fat,
         kcal:food.kcal,
         type:food.type,
         category:food.category
   
       })
       )

       setMacros(await calculateMacros(foods))

    }

    getAndShowMacros()

  },[plan.selectedFoods])


  //llevar las actions a otro js
  const searchFood = (foodList) =>{
    dispatch({
      type:'searchFood',
      payload: foodList
    })
  }

  const cleanSearch = () =>{

    dispatch({
      type: 'cleanSearch'
    })

  }
  
  const addFood = (food) =>{
    dispatch({
      type:'addFood',
      payload: food
    })
  }

  const deleteFood = (id) =>{
    dispatch({
      type:'deleteFood',
      payload:id
    })
  }

  const setGoals = (goals) =>{
    dispatch({
      type:'setGoals',
      payload:goals
    })
  }

  const setMacros = (macros) => {
    dispatch({
      type:'setMacros',
      payload:macros
    })
  }

  const changeAmount = (data)=>{
    //data is: {food.id:amountSelected}
    dispatch({
      type:'changeAmount',
      payload:data
    })
  }

  return (
    <PlanContext.Provider value = {{plan,searchFood,addFood,deleteFood,changeAmount,cleanSearch}}>
      {children}
    </PlanContext.Provider>
  )
}
 