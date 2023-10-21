import { useContext } from "react"
import { MealContext } from "../context/MealContext"
import ItemBusqueda from "./ItemBusqueda"

export default function ListaBusqueda() {

  const {plan} = useContext(MealContext)
  const {searchFood} = plan
  
  return (
    <div className="divBusquedaComida">
      {searchFood.map(food=>{
        return (<ItemBusqueda key={food._id} food={food}/>)
      })}
    </div>
  )
}
