import { planReducer } from "./planPageReducer";
import { addDay, setPlan,deleteDay,setDayName } from "./planPageReducerActions";
import { addDayDB,deleteDayDB,setDayNameDB } from "./APIsyncPlanPageActions";

import { useEffect, useReducer, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getPlan } from "../api";
import { NavBarDay } from "./NavBarDay";


//TODO: Crear un Contexto que contenga nombre del Paciente ... o un fgetPatientNamebyId y usar el id que esta en idPlan

export default function PlanPage() {


  //const [plan,setPlan] = useState()

  const [plan,dispatch] = useReducer(planReducer,null)

  //const [days,setDays] = useState([])
  const [dayData,setDayData] = useState({})

  const location = useLocation()
  const navigate = useNavigate()
  const {planId,dayName} = useParams()


  useEffect(()=>{
    const asyncEffect = async () => {
      const dataPlan = await getPlan(planId)
      setPlan(dispatch,dataPlan)
    }
    asyncEffect()
  },[])
  
  useEffect(()=>{
    if(plan){
      const lastDay = localStorage.getItem('lastDay')
     // navigate(lastDay? `./${lastDay}` : `./${plan.days[0].name}`) //TODO: Solucionar bug. Last Day debe depender tmb del plan en analisis
     navigate(`./${plan.days[0].name}`)
    }
  },[plan])


  const dayActions = {

    addDay : async(dayName) =>  {const newDay = await addDayDB (planId) ; addDay(dispatch,newDay)  },
    deleteDay :async(dayName) => { deleteDay(dispatch,dayName) ;localStorage.removeItem('lastDay') ; deleteDayDB(planId,dayName) },
    setDayName : async (previousName,newName) => { const result = await setDayNameDB(planId,previousName,newName) //mod DB
    ;if(result) {setDayName (dispatch,{previousName,newName}); localStorage.setItem('lastDay',newName) ;  return result }
    ; if(!result) { console.log('Nombre ya existente') ; return result }}, 
    
  }

  return (
    <div>
      <div className="planPageHeader">
        <p className="textPlanName">{`${plan?plan.name:''}`}</p>
        <NavBarDay days={plan?plan.days:[]} dayActions={dayActions}/>
      </div>
      <Outlet/>
    </div>
    
  )
}
