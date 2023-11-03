import { MealContext } from '../context/MealContext'


//Comps
import Macros from './Macros'
import BuscadorAlimentos from './BuscadorAlimentos'
import ListaSeleccionados from './ListaSeleccionados' 
import ListaBusqueda from './ListaBusqueda'

//React
import { useEffect, useState } from 'react'
import { useContext } from 'react'

//Chart
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import TituloEditable from './TituloEditable'

// De momento no usare context o redux para pasar lo buscado a la lista





export function MealComponent({addMealFunction,deleteMealFunction}) {

    
    const planContext = useContext(MealContext)
    const {plan} = planContext
    const {macros,goal,name} = plan

    const {changeMode,setMealName} = planContext

    const doughnutData = {
        labels: ['Protein', 'Carbos', 'Fats'],
        datasets: [
          {
            label: 'gramos',
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
                <div className="divNombrePlato">
                <TituloEditable name={name} setName={setMealName} clase={'textNombrePlato'} />
                  <div className="divButtonAuto">
                      <p className='autoText'>Auto</p>
                      <button onClick={()=>changeMode()} className={`checkBtn ${plan.autoCalculate?"checked":""}`}></button>
                      <i onClick={()=>deleteMealFunction(name)} className='bx bx-x mealTrashButton'></i>
                  </div>
                </div>
                {/* construir Componente */}
                <Macros macros={goal?goal:{p:0,c:0,f:0,kcal:0}}  disable={false} />
                <Macros macros={macros?macros:{p:0,c:0,f:0,kcal:0}}  disable={true}/>
                <BuscadorAlimentos/>
                {plan.selectedFoods.length !=0?  <ListaSeleccionados/> : null}

                <div className="divMealBottom">
                  <hr className='lineaFinMeal'/> <button className='buttonAggPlato' onClick={()=>addMealFunction(name)}><p>+</p></button>
                </div>
                
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