import { useEffect } from "react"
import { useState } from "react"

import {getAlimentos} from '../api.js'
import { useContext } from "react"
import { PlanContext } from "../context/planContext.jsx"

export default function BuscadorAlimentos() {

  const [searchValue,setSearchValue] = useState('')
  const [alimentos,setAlimentos] = useState([])

  const {searchFood} = useContext(PlanContext)

  useEffect(() => {
    
    const fetchAlimentos = async () => {

    if(searchValue.trim().length >=2 ) {
      setAlimentos(await getAlimentos(searchValue))
    }
    else setAlimentos([])
   }

   fetchAlimentos()
   
  },[searchValue])

  useEffect(()=>{
    searchFood(alimentos)
  },[alimentos])
  
  

  return (
    <div className="divBuscadorAlimentos">
        <input className="buscadorAlimentos " onChange={(e)=>setSearchValue(e.target.value)}></input>
    </div>
  )
}
