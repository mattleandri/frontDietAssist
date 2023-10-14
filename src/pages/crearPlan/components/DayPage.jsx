import { PlanContext } from '../context/planContext'

//Comps
import Macros from './Macros'
import BuscadorAlimentos from './BuscadorAlimentos'
import ListaSeleccionados from './ListaSeleccionados' 
import ListaBusqueda from './ListaBusqueda'

//React
import { useEffect } from 'react'
import { useContext } from 'react'

// De momento no usare context o redux para pasar lo buscado a la lista




export function DayPage() {

  const {plan} = useContext(PlanContext)
  const {p,c,f,kcal} = plan.macros

  return (
    <div className="flexH">

      <div className='flexV'>
        <div className="opcArriba flex">
        <button className="checkBtn" ></button>
        <button className="confDistBtn" >Configurar Distribucion</button>
          </div>
        <div className="divNombrePlato">
          <h1>
              Plato 1
          </h1>
        </div>
        {/* construir Componente */}
        <Macros macros={{p:120,c:320,f:70,kcal:2390}}  disable={false} />
        <Macros macros={{p:p||0,c:c||0,f:f||0,kcal:kcal||0}}  disable={true}/>
        <BuscadorAlimentos/>
        {plan.selectedFoods.length != 0 ? <ListaSeleccionados/> : null}
      </div>

      <div className="flexV">
        {plan.searchFood.length != 0 ? <ListaBusqueda/> : null}
      </div>
      
      
    </div>
  )
}
