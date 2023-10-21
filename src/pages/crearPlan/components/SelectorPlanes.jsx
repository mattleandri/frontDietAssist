import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getPlanNames } from "../api"
export default function SelectorPlanes() {

    const [planes,setPlanes] = useState([])
    const location = useLocation()
    const {patientId} = useParams()


    useEffect(()=>{
        const assyncEffect = async () =>{
            setPlanes (await getPlanNames(patientId))
        }
        assyncEffect()
    },[])


  return (
    <div className="divSelectorCard">
        {planes.map(plan =>{
            return(
                <div key={plan.name} className="planSelector">
                    <Link className='cardButton' to={`../../${patientId}@${plan.name}`}> {plan.name}</Link>
                </div>
            )
        })}
    </div>
  )
}
