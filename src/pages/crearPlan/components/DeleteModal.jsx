import { useEffect, useState } from "react"

export default function DeleteModal({name,setShowDeleteModal,confirmDelete}) {
    //TODO: rename "name" to  or remove it

    const handleCancel = ()=>{
        document.body.classList.remove('no-scroll');
        setShowDeleteModal(false)
    }
    
    const hanldeConfirm = ()=>{
        setShowDeleteModal(false) 
        confirmDelete()
        document.body.classList.remove('no-scroll');
    } 

    useEffect(()=>{
        document.body.classList.add('no-scroll');
    },[])
   
  return (
    <div className="divFondoModal">
        <div className="divDeleteModal">
            <p>Estas seguro que deseas ELIMINAR {name} ?</p>
            <div className="DivBotonesDeleteModal">
                <button  onClick={ () => handleCancel() } className="button">Cancelar</button>
                <button  onClick={ () => hanldeConfirm()} className="button deleteButton">Confirmar</button>
            </div>
        </div>
    </div>
        
  )
}
