import React from 'react'
import { useContext } from 'react'
import { PlanContext } from '../context/planContext'


export default function ItemSeleccionado({food}) {

    const {deleteFood} = useContext(PlanContext)

    //console.log(food)

  return (
    <div className='divItemSeleccionado'>
      <p>{food.name}</p>
      <input className='amountInput' placeholder='amount' value={food.type=='w'?100:1} />
      <div className="trashIcon" >
      <i className='bx bxs-trash-alt' onClick={()=> deleteFood(food.id)} />
      </div>
      
    </div>
  )
}
