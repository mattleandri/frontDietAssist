import { getPatients } from "../../verPacientes/api"
import { useState,useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import CreatePacienteModal from "./CreatePacienteModal"
import { newPatient,deletePatient } from "../api"

//TODO: Acomodar import para que sea de su api


export function SelectorPacientes(){

  const  selectorPacientesActions = {
    newPatient : async (data) => {  const result =  await newPatient(data) ;
           if(result) setPacientes([...pacientes,result]) ; return result },
    deletePatient : async (id) => {const result = await deletePatient(id) ; 
            if(result) setPacientes([...pacientes.filter(paciente=> {if(paciente._id!=id) return paciente})])}
  }


  const [pacientes,setPacientes] = useState([])
  const [seleccionado,setSeleccionado] = useState(false)
  const [showPatientModal,setShowPatientModal] = useState(false)
  const location = useLocation()

  useEffect(()=>{

    if(location.pathname == '/panel/crearPlan/seleccionar'){
      setSeleccionado(false)
    }

    const effectAsync =  async()=>{
      setPacientes (await getPatients())
    } 
    effectAsync()
  },[location.pathname])
  

  return (
    

    seleccionado==false?
    <>
      <div className="divSelectorCard">
        { pacientes.map((paciente) =>{return( 
          <div key={paciente._id} className="divPacienteButton">
            {/* <i className='bx bx-x deleteButtonPacientes' onClick={()=> selectorPacientesActions.deletePatient(paciente._id)} ></i> */}
            <Link className="cardButton" to={`./${paciente._id}`} onClick={()=> setSeleccionado(true)}> 
              <div className="divPacienteInfo">
                <p className="textoNombrePaciente">{`${paciente.name} ${paciente.surname}`}</p>
                <p className="textoDeportePaciente" >{paciente.sport}</p>
                <p className="textoOcupacionPaciente" >{paciente.ocupation}</p>
              </div>
            </Link>
          </div>)}
        )} 
        <div onClick={setShowPatientModal} className="plusSelectorButton">
        <p >+</p>
        </div>
      </div>

      {showPatientModal && <CreatePacienteModal setShowModal={setShowPatientModal} confirm={selectorPacientesActions.newPatient}/>}
    </>:
    <Outlet></Outlet>
    )
}
