
import { useEffect, useState } from "react"
import { useForm } from "../../../hooks/useForm";


export default function CreatePlanModal({name,setShowModal,confirm}) {

    //TODO: Banderas en tiempo de escritura verificando si no existe ya el DNI

    const {formState,onInputChange} = useForm()

    // TODO: Crear validaciones con msj individuales
    const validate = () => {
        let result = true
        Object.values(formState).forEach(value=>
           {if(value == '') result = false }
        )
        return result
    }

    const handleCancel = ()=>{
        document.body.classList.remove('no-scroll');
        setShowModal(false)
    }
    
    const hanldeConfirm = async()=>{

        if(validate()){
            const result = await confirm(formState)
            if(result){
                document.body.classList.remove('no-scroll');
                setShowModal(false)
            }
            else{
                alert('Ya existe un paciente con esta ID') //TODO:  
            }
        }
        else alert('Ingrese Todos los datos Correctamente') // TODO: Crear validaciones con msj individuales
        
    } 

    useEffect(()=>{
        document.body.classList.add('no-scroll');
    },[])
   
  return (
    <div className="divFondoModal">
        <div className="divPacienteModal">
            <p>NUEVO PLAN</p>
            <div className="divOpcionesPaciente">
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Nombre</p>
                        <input name="name" onChange={ e=> onInputChange(e,null,null)} placeholder="" className="inputTextOpcPaciente" type="text" value={formState.name} />
                    </div>   
                </div>
                <div className="divOpcLinea ">
                  <p>Objetivo Diario</p>
                </div>
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Kcal</p>
                        <input name="kcal" onChange={ e=> onInputChange(e,'positiveNumber',null)} placeholder="" className="inputLittleNumberOpcPaciente" type="text" value={formState.kcal} />
                    </div>    
                    <div className="divTextOpcPaciente">
                        <p>P</p>
                        <input name="p" onChange={ e=> onInputChange(e,'positiveNumber',null)} placeholder="g" className="inputLittleNumberOpcPaciente" type="text" value={formState.p} />
                    </div>  
                    <div className="divTextOpcPaciente">
                        <p>C</p>
                        <input name="c" onChange={ e=> onInputChange(e,'positiveNumber',null)} placeholder="g" className="inputLittleNumberOpcPaciente" type="text" value={formState.c}/>
                    </div>  
                    <div className="divTextOpcPaciente">
                        <p>F</p>
                        <input name="f" onChange={ e=> onInputChange(e,'positiveNumber',null)} placeholder="g" className="inputLittleNumberOpcPaciente" type="text" value={formState.f} />
                    </div>  
                    <div className="divTextOpcPaciente platosDiarios">
                        <p>Platos Diarios</p>
                        <input name="meals" onChange={ e=> onInputChange(e,'positiveNumber',null)} placeholder="" className="inputLittleNumberOpcPaciente" type="text" value={formState.meals} />
                    </div>  
                </div>
                <div className="divOpcLinea mt70">
                    <div className="divTextOpcPaciente">
                        <p>Descripcion</p>
                        <input name="description" onChange={ e=> onInputChange(e,null,null)} placeholder="" className="inputTextLongOpcPaciente" type="text" value={formState.description} spellCheck={false}/>
                    </div>    
                </div>
                  
                
            </div>
            <div className="DivBotonesDeleteModal ">
                <button  onClick={ () => handleCancel() } className="button">Cancelar</button>
                <button  onClick={ () => hanldeConfirm(name)} className="button ">Crear</button>
            </div>
        </div>
    </div>
        
  )
}
