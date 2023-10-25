import { useState } from "react"
import React from "react"

export default function TituloEditable({ name,setName, type ='h1' , clase , conditions = [] }) {

    const [editable,setEditable] = useState(false)

    const handleFinished = async (e) => {
        setEditable(false)
        await setName(name,e.target.innerText)?
        null
        :e.target.innerText=name
      }
 
    const handleClick  = () =>{
        if(conditions.length==0)setEditable(true)
        else{ 
            let result = true
            conditions.forEach(condition => 
            {if(condition==false) result =  false})
            result?setEditable(true):null
        }
    }   

  return (
    React.createElement(
        type,
        {
          className:  `${clase } user-select-none`,   //'textNombrePlato user-select-none',
          contentEditable: editable,
          onClick: handleClick,
          onBlur: handleFinished,
          spellCheck: false,
          suppressContentEditableWarning: true,
          onKeyDown: (e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Corrige este llamado
              handleFinished(e);
            }
          },
        },
        name
      )
    );
}
