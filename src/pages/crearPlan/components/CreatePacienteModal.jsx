import { useEffect, useState } from "react"
import { useForm } from "../../../hooks/useForm";

export default function CreatePacienteModal({name,setShowModal,confirm}) {

    //TODO: Banderas en tiempo de escritura verificando si no existe ya el DNI

    const {formState,onInputChange} = useForm({
        
        name:'a',
        surname:'b',
        dni:'',
        sex:'',
        age:'',
        height:'',
        weight:'',
        sport:'',
        ocupation:'',
        goal:'',

    })

    console.log(formState)

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
        //setShowDeleteModal(false) 
        //confirmDelete(name)
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
            <p>NUEVO PACIENTE</p>
            <div className="divOpcionesPaciente">
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Nombre</p>
                        <input name="name" onChange={ e=> onInputChange(e,null,null)} className="inputTextOpcPaciente" type="text" value={formState.name} />
                    </div>
                    <div className="divTextOpcPaciente">
                        <p>Apellido</p>
                        <input name="surname" onChange={ e=> onInputChange(e,null,null)} className="inputTextOpcPaciente" type="text" value={formState.surname} />
                    </div>         
                    <div className="divTextOpcPaciente">
                        <p>DNI</p>
                        <input name="dni" onChange={ e=> onInputChange(e,null,null)} className="inputDNIOpcPaciente" type="text" value={formState.dni} />
                    </div>            
                </div>
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Sexo</p>
                        <input name="sex" onChange={ e=> onInputChange(e,null,null)} placeholder="do select" className="inputNumberOpcPaciente" type="text" value={formState.sex} />
                    </div>    
                    <div className="divTextOpcPaciente">
                        <p>Edad</p>
                        <input name="age" onChange={ e=> onInputChange(e,null,null)} className="inputNumberOpcPaciente" type="text" value={formState.age} />
                    </div>  
                    <div className="divTextOpcPaciente">
                        <p>Altura</p>
                        <input name="height" onChange={ e=> onInputChange(e,null,null)} placeholder="cm" className="inputNumberOpcPaciente" type="text" value={formState.height}/>
                    </div>  
                    <div className="divTextOpcPaciente">
                        <p>Peso</p>
                        <input name="weight" onChange={ e=> onInputChange(e,null,null)} placeholder="kg" className="inputNumberOpcPaciente" type="text" value={formState.weight} />
                    </div>  
                </div>
                <div className="divOpcLinea mt70">
                    <div className="divTextOpcPaciente">
                        <p>Deporte</p>
                        <input name="sport" onChange={ e=> onInputChange(e,null,null)} className="inputTextLongOpcPaciente" type="text" value={formState.sport}/>
                    </div>    
                </div>
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Ocupacion</p>
                        <input name="ocupation" onChange={ e=> onInputChange(e,null,null)} className="inputTextLongOpcPaciente" type="text" value={formState.ocupation} />
                    </div>    
                </div>
                <div className="divOpcLinea">
                    <div className="divTextOpcPaciente">
                        <p>Objetivo</p>
                        <input name="goal" onChange={ e=> onInputChange(e,null,null)} className="inputTextLongOpcPaciente" type="text" value={formState.goal} />
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
