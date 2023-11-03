import { MealContext } from '../context/MealContext.jsx'

import { useEffect, useState } from "react"
import {useForm} from "../../../hooks"
import { useContext } from "react"

export default function Macros({macros,disable}) {

    const {setGoals} = useContext(MealContext)
    const {p,c,f,kcal,onInputChange,updateForm} = useForm(macros)


    if(disable==true){
        useEffect(()=>{
            updateForm(macros)
        },[macros])
    }

  return (
    <div className="divMacrosObtenidos">
        <div className="macroItem">
            <p className="macroName">P: </p>
            <input disabled={disable?true:false} name="p" value={p?p.toFixed(1):0} 
            onChange={(e)=> {onInputChange (e,'positiveNumber','number'); setGoals({p:parseFloat(e.target.value) , c:c, f:f , kcal:kcal }) }} 
            type="number" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p className="macroName" >C: </p>
            <input disabled={disable?true:false} name="c" value={c?c.toFixed(1):0} 
            onChange={(e)=> {onInputChange (e,'positiveNumber'); setGoals({c:parseFloat(e.target.value) , p:p, f:f , kcal:kcal }) }}
            type="number" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p className="macroName" >G: </p>
            <input disabled={disable?true:false} name="f" value={f?f.toFixed(1):0}
            onChange={(e)=> {onInputChange (e,'positiveNumber'); setGoals({f:parseFloat(e.target.value) , p:p , c:c , kcal:kcal }) }}
            type="number" className="inputMacro" />
        </div>
        <div className="macroItem kcal">
            <p  className="macroName" >Kcal:</p>
            <input disabled={disable?true:false} name="kcal"  value={kcal?kcal.toFixed(1):0} 
            onChange={(e)=> {onInputChange (e,'positiveNumber'); setGoals({kcal:parseFloat(e.target.value) , p:p, c:c , f:f }) }}
            type="number" className="inputMacro" />
        </div>
    </div>
  )
}
