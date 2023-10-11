import { useContext } from "react"
import { PlanContext } from "../context/planContext"
import ItemBusqueda from "./ItemBusqueda"

export default function ListaBusqueda() {

  const {plan} = useContext(PlanContext)
  const {searchFood} = plan
  
  return (
    <div className="divBusquedaComida">
      {searchFood.map(food=>{
        return (<ItemBusqueda key={food._id} food={food}/>)
      })}
    </div>
  )
}
