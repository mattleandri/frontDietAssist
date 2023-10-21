import { useEffect } from 'react'
import MealProvider from '../context/MealProvider.jsx'
import { MealComponent } from './MealComponent.jsx'
import { useAsyncEffect } from '../../../hooks/useAsyncEffect.js'
import { getDay,getAlimentosById } from '../api.js'
import { useLoaderData } from 'react-router-dom'

//TODO: Posiblemente si debere crear un DayProvider. Para manejar CURD de meals y 
// para obtener facilmente los resultados totales del dia ... quizas no sea necesario. Ya se vera


export const dayLoader = async(params) => {

  const {planId,dayName} = params

  const dayData = await getDay(planId,dayName)

  try{

    const dayDataWithFoodsPromise = {
      ...dayData , meals: await Promise.all( dayData.meals.map( async  meal => {
        return {...meal, foods: await Promise.all( meal.foods.map( async(food)=>{
          return {selectedAmount: food.amount , ... await getAlimentosById(food.foodId)}
        }) )}
    }))}
  

    return dayDataWithFoodsPromise

  }catch(err){
    console.log(err)
  }

  
}

export function DayPage() {

  const dayDataWithFoods = useLoaderData()
  console.log(dayDataWithFoods)


  //TODO:Cuidado con la key. Meal.name puede ser igual en los distintos dias Hacer validacion...
  return (
    <div className='divMeals'>
     
     {dayDataWithFoods.meals.map((meal)=>{
      return(
        <div key={`${meal.name}`} >
          <MealProvider mealData={meal}>
            <MealComponent name={meal.name} />
          </MealProvider>
        </div>
      )
     })}     
    </div>
  )
}
