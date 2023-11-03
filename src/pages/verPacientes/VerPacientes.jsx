//With useLoaderData from 
import { useLoaderData } from "react-router-dom"
import { getPatients } from "./api"

// Not working actually. See getPatients() for more info

export async function loader (){

    const data = await getPatients()
    return data
}


export function VerPacientes() {

    const patients = useLoaderData();

  return (
    <div>
        {patients.length == 0? 
        (<p>Cargando...</p>):
        patients.map((patient)=>{
        return(<p key={patient.name}> {patient.name}</p>)
        })}
    </div>
  )
}
