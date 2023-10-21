import { useEffect, useRef } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import '../../styles/panel.css';

export function Panel() {

    useEffect(()=> async function (){

        const token =  localStorage.getItem('accesToken')

        const res =  await fetch('http://localhost:3000/Panel/getPanel',{
            headers:{xtoken:token}
        })

        //const data = await res.json()
        console.log(res.status)


    },[])
    const location=useLocation()
    
    const inputRef =useRef(null)

    const focusInput = ()=>{
        inputRef.curent.focus()
    }

    const currentPath = location.pathname
    // TODO: Error de Disenio . Todo el boton (div) deveria ser clicleable. No solo el texto (<a> => <Link> )

  return (
    <>
      <div className="header">
        <div className="log-items">
            <a href="/">Log-Out</a>
        </div>
        </div>
        <div className="flex-container">
            <div className="slide-bar-container">
                <div className="bar-tittle bar-item">
                    <p>DIET ASISST</p>
                </div>
                <div className={currentPath == '/verPacientes' ? "active bar-item":"bar-item" }>
                    {/* <a href="/">Ver Pacientes</a> */}
                <Link to={'verPacientes'}>Ver Pacientes</Link>
                </div>
                <div className={currentPath == '/crearAlimento' ? "active bar-item":"bar-item" }>
                    <Link to={'crearAlimento'}>Crear Alimento</Link>
                </div>
                <div className={currentPath =='/crearPlan'? "active bar-item":"bar-item" }>
                    <Link to={'crearPlan'}>Crear Plan</Link>
                </div>
            </div>
            <div className="main-container">
                <Outlet/>
            </div>
        </div>
    </>
  )
}

 
