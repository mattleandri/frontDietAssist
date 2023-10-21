
import { getPatients } from "../../verPacientes/api"
import { useState,useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

//TODO: Acomodar import para que sea de su api

export function SelectorPacientes(){

  const [pacientes,setPacientes] = useState([])
  const [seleccionado,setSeleccionado] = useState(false)
  const location = useLocation()

  useEffect(()=>{

    if(location.pathname == '/panel/crearPlan/seleccionar'){
      setSeleccionado(false)
    }

    const effectAsync =  async()=>{
      setPacientes (await getPatients())
    console.log(pacientes)
    } 
    effectAsync()
  },[location.pathname])

  return (
    seleccionado==false?
    <div className="divSelectorCard">
      { pacientes.map((paciente) =>{return( 
        <div key={paciente._id} className="divPacienteButton">
        <Link className="cardButton" to={`./${paciente._id}`} onClick={()=> setSeleccionado(true)}> {paciente.name}</Link>
      </div>)}
      )} 
    </div>:
    <Outlet></Outlet>
    )
}
