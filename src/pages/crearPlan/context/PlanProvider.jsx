import { useReducer } from "react"
import { PlanContext } from "./planContext"
import { planReducer } from "./planReducer"

export default function PlanProvider({children}) {

  const [plan,dispatch] = useReducer(planReducer,{
    selectedFoods:[],
    goals:[{p:0,c:0,f:0}],
    distribution:[],
    searchFood:[]
  })

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

  return (
    <PlanContext.Provider value = {{plan,searchFood,addFood}}>
      {children}
    </PlanContext.Provider>
  )
}
 