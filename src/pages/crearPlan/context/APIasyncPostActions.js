
export const updateMealGoalDB = async (goals,planId,dayName,mealName) =>{

    try{
        //console.log(goals,planId,dayName,mealName)
        const response  = await fetch(`http://localhost:3000/CreatePlan/updateMealGoal/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(goals)
        })

        const msg = await response.json() 

        if(!response.ok) throw new Error (msg)
        

    }catch(err){
        console.log(err)
    }
    

}

export const setMealNameDB = async (newMealName,planId,dayName,mealName) => {

    try{
        //console.log(goals,planId,dayName,mealName)
        const response  = await fetch(`http://localhost:3000/CreatePlan/updateMealName/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newMealName})
        })

        const msg = await response.json() 

        if(!response.ok) throw new Error (msg)
        
        return true

    }catch(err){
        console.log(err)
        return false
    }
    

}

export const addMealDB = async (mealNameClicked,planId,dayName)=> {

    try{
        console.log(mealNameClicked)

        const response  = await fetch(`http://localhost:3000/CreatePlan/addMeal/${planId}/${dayName}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mealNameClicked})
        })

        if(!response.ok) throw new Error (msg)

        const data = await response.json() 

        return(data)
        
    }catch(err){
        console.log(err)
    }

}

export const deleteMealDB = async (planId,dayName,mealName) =>{

    try{

        const response  = await fetch(`http://localhost:3000/CreatePlan/deleteMeal/${planId}/${dayName}/${mealName}`,{
            method: 'DELETE',
        })

        if(!response.ok) throw new Error (msg)

        const data = await response.json() 

        return(true)
        
    }catch(err){
        console.log(err)
        return false
    }

}