
//Actually not working (rdirect to other apage in Server)
//becuase need to send the JWT


export async function getPatients(){

  const token = localStorage.getItem('accesToken')

    try{
      const resp = await fetch(`${import.meta.env.VITE_MAINAPI}/patients/getPatients`,{
        headers: {'Authorization': `Bearer ${token}`}
      }
      )
      if(!resp.ok) throw new Error('Error en la solicitud')
  
      const data = await resp.json()
      return(data)
  
  
    }catch(err){
      console.log(err)
    }
}
