import CreatePlanModal from "./CreatePlanModal"
import { newPlan } from "../api";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getPlanNames } from "../api"
export default function SelectorPlanes() {

    const [planes,setPlanes] = useState([])
    const location = useLocation()
    const {patientId} = useParams()

    const [showPlanModal,setShowPlanModal] = useState(false)

    useEffect(()=>{
        const assyncEffect = async () =>{
            setPlanes (await getPlanNames(patientId))
        }
        assyncEffect()
    },[])

    const selectorPlanActions = {
        newPlan : async (data) => {const result =  await newPlan({...data,patientId:patientId}); console.log(result) ; 
        if(result) setPlanes([...planes, result]) ; return result }
    }

  return (
    <>
    <div className="divSelectorCard">
        {planes.map(plan =>{
            return(
                <div key={plan.name} className="planSelector">
                    <Link className='cardButton' to={`../../${patientId}@${plan.name}`}> 
                        <div className="divPacienteInfo"> 
                            <p className="textoNombrePaciente">{`${plan.name}`}</p>
                            {/* <p className="textoDeportePaciente" >{`kcal:${plan.goal.kcal} p:${plan.goal.p} c:${plan.goal.c}`}</p> */}
                        </div>
                    </Link>
                </div>
            )
        })}
        <div onClick={setShowPlanModal} className="plusSelectorButton">
        <p >+</p>
        </div>
    </div>
    
    {showPlanModal && <CreatePlanModal setShowModal={setShowPlanModal} confirm={selectorPlanActions.newPlan}/>}
    </>
  )
}
