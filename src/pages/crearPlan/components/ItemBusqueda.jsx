import {useContext} from 'react'
import { PlanContext } from "../context/planContext"

export default function ItemBusqueda({name,id}) {

  const {addFood} = useContext(PlanContext)

  return (
    <div className='itemBusquedaComida' onClick={()=> addFood (id)}>
      <h1 >{name}</h1>
    </div>
  )
}
