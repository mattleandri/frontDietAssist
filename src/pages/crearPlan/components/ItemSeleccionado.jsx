import React, { useEffect } from 'react'
import { useContext } from 'react'
import { PlanContext } from '../context/planContext'
import {useForm} from '../../../hooks/useForm.js'

export default function ItemSeleccionado({food}) {

    const {deleteFood,changeAmount} = useContext(PlanContext)
    const {formState , onInputChange } = useForm({selectedAmount:food.selectedAmount})

    const {selectedAmount,} = formState

    useEffect(()=>{
      changeAmount({id:food._id,selectedAmount:selectedAmount})
    },[selectedAmount])

    //TODO: quitar el useForm para manejar con mas presicion este input.
    //El valor nunca deberia ser un ' ' o un numero negativo ya que esto no pasara las validaciones del servidor
    // => Manejar el borrado total o escritura de letras

  return (
    <div className='divItemSeleccionado'>
      <p>{food.name}</p>
      <input  value={selectedAmount} name='selectedAmount' onChange={(e)=> onInputChange(e)}  className='amountInput'  type="text"  />
      <p className='foodType'>{food.type=='w'?'g':'u'}</p>
      <div className="divTrashIcon">
      <i className='bx bx-x trashIcon' onClick={()=> deleteFood(food._id)} />
      </div>
    </div>
  )
}
