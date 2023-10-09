import { useContext } from "react"
import { PlanContext } from "../context/planContext"
import ItemBusqueda from "./ItemBusqueda"

export default function ListaBusqueda() {

  const {plan} = useContext(PlanContext)
  const {searchFood} = plan
  
  return (
    <div className="divBusquedaComida">
      {searchFood.map(food=>{
        return (<ItemBusqueda key={food.id} name={food.name} kcal = {food.kcal} carbs = {food.carbs} protein = {food.protein}
           fat = {food.fat} id = {food._id}/>)
      })}
    </div>
  )
}
