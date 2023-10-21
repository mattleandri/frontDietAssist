import { useEffect } from 'react'
import '../../styles/pages.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import MealProvider from './context/MealProvider'

export function CrearPlan() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    if(location.pathname == '/panel/crearPlan')navigate('./seleccionar')
  },[location.pathname])


  //TODO:Agg condicion. Que busque en localStorage ultimo paciente con el que trabajo.
  //Si hay alguno se dirige directamente ahi. De momento navego directamente a seleccionar Paciente
  
  return(
      <Outlet/>

  )
  
}
