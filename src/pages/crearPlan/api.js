

export async function getPlan (id) {
    //TODO: Agregar que se le envie como query param la id del plan

    try{
        const response = await  fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getPlan/${id}`)
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

        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getAlimentos?foodName=${foodName}`)
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
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/getAlimentosById/${id}`)
        if(!response.ok) throw new Error (response.status)

        const alimento = await response.json()

        return alimento

    }catch(err){
        console.log(err)
    }

}

export async function calculateMacros(foods){

    try{
        const response = await fetch(`${import.meta.env.VITE_NUTRIALGORAPI}/manual/sum`,{
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
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getPlansNames/${patientId}`)

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
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/getPlan/${planId}/${dayName}`)

        if(!response.ok) throw new Error (response.status)

        const data = await response.json()

        return data

    }catch(err){
        console.log(err)
        return {}
    }

}



export async function newPatient(patientData){

    const token = localStorage.getItem('accesToken')
  
      try{
        const resp = await fetch(`${import.meta.env.VITE_MAINAPI}/patients/newPatient`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientData)
        }
        )
        if(!resp.ok) throw new Error('Error en la solicitud')
    
        const data = await resp.json()
        return(data)
    
    
      }catch(err){
        console.log(err)
        return false
      }
  }

export async function deletePatient(patientId){

    const token = localStorage.getItem('accesToken')
  
      try{
        const resp = await fetch(`${import.meta.env.VITE_MAINAPI}/patients/deletePatient`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({patientId})
        }
        )
        if(!resp.ok) throw new Error('Error en la solicitud')
    
        const data = await resp.json()
        return(data)
    
    
      }catch(err){
        console.log(err)
        return false
      }
}

export async function newPlan(planData){

    const token = localStorage.getItem('accesToken')

      try{
        const resp = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/newPlan`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(planData)
        }
        )
        if(!resp.ok) throw new Error('Error en la solicitud')
    
        const data = await resp.json()
        console.log(data)
        return(data)
    
    
      }catch(err){
        console.log(err)
        return false
      }


}



//POSTS
//TODO: llevar a AsyncContextActions
export async function putSelectedFoods(planId,dayName,mealName,foods){

    try{
        if(!foods) throw new Error('No se enviaron alimentos')
        const response = fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/updateFoods/${planId}/${dayName}/${mealName}`,{
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