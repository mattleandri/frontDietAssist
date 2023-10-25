export async function addDayDB (planId){

    try{
        const result = await fetch(`http://localhost:3000/createPlan/addDay/${planId}`,{
            method: 'PUT',
        })

        const newDay = await result.json()
        console.log(newDay)
        return newDay

    }catch(err){
        console.log(err)
    }

}

export async function deleteDayDB (planId,dayName){

    try{
        const result = await fetch(`http://localhost:3000/createPlan/deleteDay/${planId}/${dayName}`,{
            method: 'DELETE',
        })

        const data = await result.json()

    }catch(err){
        console.log(err)
    }

}

export async function setDayNameDB (planId,previousName,newDayName){

    try{
        const response = await fetch(`http://localhost:3000/createPlan/setDayName/${planId}/${previousName}`,{
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newDayName})
        })

        if(!response.ok) throw new Error (msg)

        return true

    }catch(err){
        console.log(err)
        return false
    }

}