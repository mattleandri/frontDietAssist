import Macros from './Macros'
import BuscadorAlimentos from './BuscadorAlimentos'
import ListaAlimentos from './ListaAlimentos'
import ListaBusqueda from './ListaBusqueda'
// De momento no usare context o redux para pasar lo buscado a la lista
// quizas luego si 


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
        <Macros/>
        <Macros/>
        <BuscadorAlimentos/>
        <ListaAlimentos/>
      </div>

      <div className="flexV">
        <ListaBusqueda/>
      </div>
      
      
    </div>
  )
}
