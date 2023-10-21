
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