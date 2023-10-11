import { calculateMacros } from "../api"
import { PlanContext } from "./planContext"
import { planReducer } from "./planReducer"

import { useReducer } from "react"
import { useEffect } from "react"

export default function PlanProvider({children}) {

  
  const [plan,dispatch] = useReducer(planReducer,{
    selectedFoods:[],
    goals:{p:0,c:0,f:0,kcal:0},
    distribution:[],
    searchFood:[]
  })


  //Tambien dependera de si se modican los goals o la distribucion... en fin. De todo menos de searchFoods
  // TODO: Quitar searchFoos de este Provider 
  useEffect(()=>{

    const foods =  plan.selectedFoods.map(food=>
     ({
      id:food._id,
      amount:food.amount
    })
    )

    console.log(foods)

    calculateMacros(foods)
  },[plan.selectedFoods])


  //llevar las actions a otro js
  const searchFood = (foodList) =>{
    dispatch({
      type:'searchFood',
      payload: foodList
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
      tpye:'setGoals',
      payload:goals
    })
  }

  return (
    <PlanContext.Provider value = {{plan,searchFood,addFood,deleteFood}}>
      {children}
    </PlanContext.Provider>
  )
}
 