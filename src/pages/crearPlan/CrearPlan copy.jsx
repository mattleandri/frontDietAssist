import { useEffect } from 'react'
import '../../styles/pages.css'
import {DayPage,NavBarDay} from './components'
import PlanProvider from './context/PlanProvider'
import { Outlet } from 'react-router-dom'
import { getPlan } from './api'

export function CrearPlan() {

  useEffect(()=>{
    const effectAsync = async()=>{
      const plan = await getPlan()
      console.log(plan)
    }
    effectAsync()
  })

  return (
    <PlanProvider>
      <div className='crearPlanHeader'>
        <p>Nombre del Paciente</p>
        <NavBarDay/>
        {/* //<DayPage/> */}
      </div>
        <Outlet/>
    </PlanProvider>
  )
}
