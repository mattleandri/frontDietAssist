import { useContext } from "react"
import { PlanContext } from "../context/planContext"
import ItemBusqueda from "./ItemBusqueda"
import ItemSeleccionado from "./ItemSeleccionado"

export default function ListaSeleccionados() {

  const {plan} = useContext(PlanContext)
  const {selectedFoods} = plan

  return (
    <div className="divListaSeleccionados">
     {selectedFoods.map(food =>{
      return (<ItemSeleccionado key={food._id} food={food} />)
     })}
    </div>
  )
}
