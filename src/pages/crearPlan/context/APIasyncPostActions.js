
export const updateMealGoalDB = async (goals,planId,dayName,mealName) =>{

    try{
        const token = localStorage.getItem('accesToken')
        const response  = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/updateMealGoal/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
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
        const token = localStorage.getItem('accesToken')
        const response  = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/updateMealName/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
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
        const token = localStorage.getItem('accesToken')
        const response  = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/addMeal/${planId}/${dayName}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
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
        const token = localStorage.getItem('accesToken')
        const response  = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/deleteMeal/${planId}/${dayName}/${mealName}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
        },
        })

        if(!response.ok) throw new Error (msg)

        const data = await response.json() 

        return(true)
        
    }catch(err){
        console.log(err)
        return false
    }

}