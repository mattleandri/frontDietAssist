export async function addDayDB (planId){

    try{
        const token = localStorage.getItem('accesToken')
        const result = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/addDay/${planId}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const newDay = await result.json()
        return newDay

    }catch(err){
        console.log(err)
    }

}

export async function deleteDayDB (planId,dayName){

    try{
        const token = localStorage.getItem('accesToken')
        const result = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/deleteDay/${planId}/${dayName}`,{
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await result.json()

    }catch(err){
        console.log(err)
    }

}

export async function setDayNameDB (planId,previousName,newDayName){

    try{
        const token = localStorage.getItem('accesToken')
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/setDayName/${planId}/${previousName}`,{
            method: 'PUT', 
            headers: {
                'Authorization': `Bearer ${token}`,
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