

export async function getPlan (id) {
    //TODO: Agregar que se le envie como query param la id del plan

    try{
        const response = await  fetch(`http://localhost:3000/CreatePlan/getPlan/${id}`)
        if(!response.ok) throw new Error(response.status)

        const data = await response.json()
        return data

    }catch(err){
        console.log(err)
        return {}
    }
    

}

export async function getAlimentos(foodName){
    try{

        const response = await fetch(`http://localhost:3000/CreatePlan/getAlimentos?foodName=${foodName}`)
        if(!response.ok) throw new Error(response.status)

        const data = await response.json()

        return data

    }   
    catch(err){
        console.log(err)
        return {}
    }
    
    
} 

export async function getAlimentosById(id){

    try{
        const response = await fetch(`http://localhost:3000/createPlan/getAlimentosById/${id}`)
        if(!response.ok) throw new Error (response.status)

        const alimento = await response.json()

        return alimento

    }catch(err){
        console.log(err)
    }

}

export async function calculateMacros(foods){

    try{
        const response = await fetch(`http://localhost:3001/manual/sum`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(foods)


        })
        if(!response.ok) throw new Error(response.status)

        const data = await response.json()
        return data
        

    }catch(err){
        console.log(err)
        return {}
    }

}


export async function getPlanNames(patientId){

    try{
        const response = await fetch(`http://localhost:3000/CreatePlan/getPlansNames/${patientId}`)

        if(!response.ok) throw new Error(response.status)

        const data = await response.json()
        return data


    }catch(err){
        console.log(err)
        return {}
    }
}


export async function getDay (planId,dayName){

    try{
        const response = await fetch(`http://localhost:3000/createPlan/getPlan/${planId}/${dayName}`)

        if(!response.ok) throw new Error (response.status)

        const data = await response.json()

        return data

    }catch(err){
        console.log(err)
        return {}
    }

}



//POSTS

export async function putSelectedFoods(planId,dayName,mealName,foods){

    try{
        if(!foods) throw new Error('No se enviaron alimentos')
        const response = fetch(`http://localhost:3000/createPlan/updateFoods/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(foods)
        })

    }catch(err){
        console.log(err)
        return{}
    }

}