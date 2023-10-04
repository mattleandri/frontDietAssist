/*
import React, { useEffect, useState } from 'react'


async function getPatients(){
  try{
    const resp = await fetch('http://localhost:3000/verPacientes')
    if(!resp.ok) throw new Error('Error en la solicitud')

    const data = await resp.json()
    return(data)


  }catch(err){
    console.log(err)
  }
}

export default function VerPacientes() {

  const [patients,setPatients] = useState([])

  useEffect(()=> {

     async function fetchData(){
     const data = await  getPatients()  
     console.log("effect")
     setPatients(data)
    }

    fetchData()

    },[]
  )

  console.log("OP")

  return (
    <div>
      {
        patients.length == 0? 
        (<p>Cargando...</p>):
        patients.map((patient)=>{
        return(<p key={patient.name}> {patient.name}</p>)
      })}
    </div>
  )
}


*/