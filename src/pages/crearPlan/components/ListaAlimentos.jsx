import { useContext } from "react"
import { PlanContext } from "../context/planContext"
import ItemBusqueda from "./ItemBusqueda"

export default function ListaAlimentos() {

  const {plan} = useContext(PlanContext)
  const {selectedFoods} = plan

  return (
    <div className="divListaAlimentos">
     {selectedFoods.map(food =>{
      return (<h1>{food}</h1>)
     })}
    </div>
  )
}
