import {useContext} from 'react'
import { PlanContext } from "../context/planContext"

export default function ItemBusqueda({food}) {

  const {addFood,cleanSearch} = useContext(PlanContext)

  console.log(food)

  return (
    <div className='itemBusquedaComida' onClick={()=>{ addFood ({...food, selectedAmount: food.type=='w'?100:1}); cleanSearch() }}>
      <p className='textNameItemBusqueda'>{food.name}</p>
      <p className='textAmountItemBusqueda'>{food.type == 'w' ? '100g' : '1 unidad'}</p>
      <p className='textMacrosItemBusqueda' > P: {food.protein.toFixed(0)} | 
      C: {food.carbs.toFixed(0)} | F: {food.fat.toFixed(0)} | Kcal: {food.kcal.toFixed(0)} </p>
    </div>
  )
}
