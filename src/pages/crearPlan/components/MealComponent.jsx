import { MealContext } from '../context/MealContext'


//Comps
import Macros from './Macros'
import BuscadorAlimentos from './BuscadorAlimentos'
import ListaSeleccionados from './ListaSeleccionados' 
import ListaBusqueda from './ListaBusqueda'

//React
import { useEffect } from 'react'
import { useContext } from 'react'

//Chart
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

// De momento no usare context o redux para pasar lo buscado a la lista




export function MealComponent({name}) {

    const planContext = useContext(MealContext)
    const {plan} = planContext
    const {macros,goal} = plan

    const {changeMode} = planContext


    const doughnutData = {
        labels: ['Protein', 'Carbos', 'Fats'],
        datasets: [
          {
            label: 'Meal Distribution',
            data: [macros.p,macros.c,macros.f],
            backgroundColor: [
              'rgba(197, 231, 196, 0.2)',
              'rgba(196, 223, 231, 0.2)',
              'rgba(236, 241, 187, 0.2)',
            ],
            borderColor: [
              'rgba(163, 190, 170, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth:0.7,
          },
        ],
      }

    return (

        <div className="flexH">

            <div className='flexV'>
                <div className="divOpcArriba ">
                <div className="divButtonAuto">
                    <p>Auto</p>
                    <button onClick={()=>changeMode()} className={`checkBtn ${plan.autoCalculate?"check":""}`}></button>
                </div>
                <button className="confDistBtn" >Configurar Distribucion</button>
                </div>
                <div className="divNombrePlato">
                <h1>
                    {name} 
                </h1>
                </div>
                {/* construir Componente */}
                <Macros macros={goal?goal:{p:0,c:0,f:0,kcal:0}}  disable={false} />
                <Macros macros={macros?macros:{p:0,c:0,f:0,kcal:0}}  disable={true}/>
                <BuscadorAlimentos/>
                {plan.selectedFoods.length !=0?  <ListaSeleccionados/> : null}
                
                <hr className='lineaFinMeal'/>
            </div>

            <div className="flexV">
                {plan.searchFood.length != 0 ? 
                <ListaBusqueda/> 
                :
                <div className="macroDoughnut">
                    <Doughnut data={doughnutData}/>
                </div>
                }
            </div>
        </div>
    )
}