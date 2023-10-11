import Macros from './Macros'
import BuscadorAlimentos from './BuscadorAlimentos'
import ListaSeleccionados from './ListaSeleccionados' 
import ListaBusqueda from './ListaBusqueda'
import { useEffect } from 'react'
import { calculateMacros } from '../api'
// De momento no usare context o redux para pasar lo buscado a la lista
// quizas luego si 


// const objProteinas = 120
// const objCarbohidratos = 320
// const objGrasas = 70
// const objKcal = 2390




export function DayPage() {

  
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
        <Macros macros={{p:0,c:0,f:0,kcal:0}}  disable={true}/>
        <BuscadorAlimentos/>
        <ListaSeleccionados/>
      </div>

      <div className="flexV">
        <ListaBusqueda/>
      </div>
      
      
    </div>
  )
}
