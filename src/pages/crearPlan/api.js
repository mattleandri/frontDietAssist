export async function getAlimentos(foodName){
    
  

    try{

        const response = await fetch(`http://localhost:3000/CreatePlan/getAlimentos?foodName=${foodName}`)
        if(!response.ok) throw new Error(response.status)
    
        const data = await response.json()
        
        return data

    }
    catch(err){
        console.log(err)
    }
    
    
} 