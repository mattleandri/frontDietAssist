import { getDay } from "../api"
import { getAlimentosById } from "../api"

export const getDayWithFoodsData = async (planId,dayName) => {

    const dayData = await getDay(planId,dayName)


      const dayDataWithFoodsPromise = {
        ...dayData , meals: await Promise.all( dayData.meals.map( async  meal => {
          return {...meal, foods: await Promise.all( meal.foods.map( async(food)=>{
            return {selectedAmount: food.amount , ... await getAlimentosById(food.foodId)}
          }) )}
      }))}

  
      return { dayDataWithFoods:dayDataWithFoodsPromise }

}