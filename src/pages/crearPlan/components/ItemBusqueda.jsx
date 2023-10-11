import {useContext} from 'react'
import { PlanContext } from "../context/planContext"

export default function ItemBusqueda({food}) {

  const {addFood} = useContext(PlanContext)


  return (
    <div className='itemBusquedaComida' onClick={()=> addFood (food)}>
      <h1 >{food.name}</h1>
    </div>
  )
}
