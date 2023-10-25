import { useEffect, useState } from 'react'
import { addDay, setPlan } from './planPageReducerActions.js'
import MealProvider from '../context/MealProvider.jsx'
import { MealComponent } from './MealComponent.jsx'
import DeleteModal from './DeleteModal.jsx'
import { useAsyncEffect } from '../../../hooks/useAsyncEffect.js'
import { getDay,getAlimentosById } from '../api.js'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import { addMealDB,deleteMealDB } from '../context/APIasyncPostActions.js'
import { getDayWithFoodsData } from '../helpers/getDayWithFoodsData.js'


//TODO: Posiblemente si debere crear un DayProvider. Para manejar CURD de meals y 
// para obtener facilmente los resultados totales del dia ... quizas no sea necesario. Ya se vera


export const dayLoader = async(params) => {

  try{
    const {planId,dayName} = params
    const dayDataWithFoods = await getDayWithFoodsData(planId,dayName)
    return dayDataWithFoods

  }catch(err){
    console.log(err)
  }
}

export function DayPage() {

  const {dayDataWithFoods} = useLoaderData()
  const {planId,dayName} = useParams()
  const [dayState,setDayState] = useState({...dayDataWithFoods})
  const location = useLocation() 

  //TODO:Crear un Contexto.. no lo veo necesario
  //TODO: Tuve que agregar el useEffect porque si guardo el estado de Days para poder modificar las vista sin recarga toda la pagina
  // debo guardarlo como estado y por ende al cambiar de ruta (siendo este el Otulet) no se mod el estado...
  // medio feo... ya lo cargo desde el Loader ... para que asignarlo a un estado que debe trabajarse manualmente con useEffect...
  // poco eficiente ? no se... pero no veo otra forma de agg meal sin recarga. 

  useAsyncEffect(async()=>{
    setDayState(dayDataWithFoods)
  },null,[location.pathname])

  const [showDeleteModal,setShowDeleteModal] = useState(false)

  const addMealFunction = async(mealNameClicked) => 
  {const {newMeal,pos} = await addMealDB(mealNameClicked,planId,dayName) ; setDayState({...dayState , meals: dayState.meals.toSpliced(pos,0,newMeal) }) }

  const deleteMealFunction = async(name) =>{
    setShowDeleteModal(name)   
  }

  const confirmMealDelete = (name)=>{
    setDayState({...dayState , meals: dayState.meals.filter ((meal) => meal.name != name )})
    deleteMealDB(planId,dayName,name)
  }


  //TODO:Cuidado con la key. Meal.name puede ser igual en los distintos dias Hacer validacion...
  return (
    <div className='divMeals'>

      {showDeleteModal ? <DeleteModal name={showDeleteModal} setShowDeleteModal={setShowDeleteModal}  
      confirmDelete={confirmMealDelete}/> 
      : null}


     {dayState.meals.map((meal)=>{
      return(
        <div key={`${dayState.name}${meal.name}`} >
          <MealProvider mealData={meal}>
            <MealComponent addMealFunction={addMealFunction} deleteMealFunction={deleteMealFunction}/>
          </MealProvider>
        </div> 
      )
     })}     

    </div>
  )
}
