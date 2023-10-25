import { useEffect, useState } from "react"

export default function DeleteModal({name,setShowDeleteModal,confirmDelete}) {
    //TODO: rename "name" to  or remove it

    const handleCancel = ()=>{
        document.body.classList.remove('no-scroll');
        setShowDeleteModal(false)
    }
    
    const hanldeConfirm = (name)=>{
        setShowDeleteModal(false) 
        confirmDelete(name)
        document.body.classList.remove('no-scroll');
    } 

    useEffect(()=>{
        document.body.classList.add('no-scroll');
    },[])
   
  return (
    <div className="divFondoDeleteModal">
        <div className="divDeleteModal">
            <p>Estas seguro que deseas Eliminar {name} ?</p>
            <div className="DivBotonesDeleteModal">
                <button  onClick={ () => handleCancel() } className="button">Cancelar</button>
                <button  onClick={ () => hanldeConfirm(name)} className="button deleteButton">Confirmar</button>
            </div>
        </div>
    </div>
        
  )
}
