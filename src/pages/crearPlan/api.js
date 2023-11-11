

export async function getPlan (id) {
    //TODO: Agregar que se le envie como query param la id del plan

    try{
        const token = localStorage.getItem('accesToken')
        const response = await  fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getPlan/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
        },
    })
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
        const token = localStorage.getItem('accesToken')
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getAlimentos?foodName=${foodName}`,{
            headers: {
                'Authorization': `Bearer ${token}`
        },
    })
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
        const token = localStorage.getItem('accesToken')
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/getAlimentosById/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
        },
    })
        if(!response.ok) throw new Error (response.status)

        const alimento = await response.json()

        return alimento

    }catch(err){
        console.log(err)
    }

}

//dont need Token.. is for nutriAlgorithmApi
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
        const token = localStorage.getItem('accesToken')
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/CreatePlan/getPlansNames/${patientId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
        },
    })

        if(!response.ok) throw new Error(response.status)

        const data = await response.json()
        return data


    }catch(err){
        console.log(err)
        return {}
    }
}


export async function getDay (planId,dayName){
    const token = localStorage.getItem('accesToken')

    try{
        const response = await fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/getPlan/${planId}/${dayName}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            },
        })

        if(!response.ok) throw new Error (response.status)

        const data = await response.json()

        return data

    }catch(err){
        console.log(err)
        return {}
    }

}



export async function newPatient(patientData){


      try{
        const token = localStorage.getItem('accesToken')
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

      try{
        const token = localStorage.getItem('accesToken')
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
        const token = localStorage.getItem('accesToken')
        if(!foods) throw new Error('No se enviaron alimentos')
        const response = fetch(`${import.meta.env.VITE_MAINAPI}/createPlan/updateFoods/${planId}/${dayName}/${mealName}`,{
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(foods)
        })

    }catch(err){
        console.log(err)
        return{}
    }

}