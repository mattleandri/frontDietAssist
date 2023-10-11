import {useFrom} from "../../../hooks"

export default function Macros({macros,disable}) {

    const {formState,onInputChange} = useFrom(macros)

    const {p,c,f,kcal} = formState

  return (
    <div className="divMacrosObtenidos">
        <div className="macroItem">
            <p>P: </p>
            <input disabled={disable?true:false} name="p" value={p} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p>C: </p>
            <input disabled={disable?true:false} name="c" value={c} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem">
            <p>G: </p>
            <input disabled={disable?true:false} name="f" value={f} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
        <div className="macroItem kcal">
            <p>Kcal:</p>
            <input disabled={disable?true:false} name="kcal"  value={kcal} onChange={(e)=> onInputChange (e)} type="text" className="inputMacro" />
        </div>
    </div>
  )
}
