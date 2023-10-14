import { useEffect } from "react"
import {useForm} from "../../../hooks"

export default function Macros({macros,disable}) {

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
            <input disabled={disable?true:false} name="p" value={p.toFixed(1)} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p className="macroName" >C: </p>
            <input disabled={disable?true:false} name="c" value={c.toFixed(1)} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p className="macroName" >G: </p>
            <input disabled={disable?true:false} name="f" value={f.toFixed(1)} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem kcal">
            <p  className="macroName" >Kcal:</p>
            <input disabled={disable?true:false} name="kcal"  value={kcal.toFixed(1)} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
    </div>
  )
}
