import { planReducer } from "./planPageReducer";
import { setPlan } from "./planPageReducerActions";

import { useEffect, useReducer, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getPlan } from "../api";
import { NavBarDay } from "./NavBarDay";


//TODO: Aqui leere la URL para solicitar a DB el Plan adecuado

export default function PlanPage() {


  //const [plan,setPlan] = useState()

  const [plan,distpatch] = useReducer(planReducer,null)

  //const [days,setDays] = useState([])
  const [dayData,setDayData] = useState({})

  const location = useLocation()
  const navigate = useNavigate()
  const {planId,dayName} = useParams()


  useEffect(()=>{
    const asyncEffect = async () => {
      const dataPlan = await getPlan(planId)
      setPlan(distpatch,dataPlan)
    }
    asyncEffect()
  },[])
  
  useEffect(()=>{
    if(plan){
      navigate(`./${plan.days[0].name}`) //TODO: Para que se muestre el ultimo dia creado. A mejorar luego CAMBIAR CUANTO ANTES a localStorage. ultimo mod
    }
  },[plan])

  // useEffect(()=>{
  //   if(plan) setDayData(plan.days.filter(day=>day.name ==`${dayName}`))
  // },[location.pathname])

  console.log(plan?plan:null)

  return (
    <div>
      <div className="planPageHeader">
        <p>Nombre del Plan | Paciente</p>
        <NavBarDay days={plan?plan.days:[]} distpatch={distpatch}/>
      </div>
      <Outlet/>
    </div>
    
  )
}
