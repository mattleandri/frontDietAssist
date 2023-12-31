import { useState } from "react";

export function useForm (form = {}) {

    const [formState,setFormState] = useState(form)

    const updateForm = (newVal)=>{
        setFormState(newVal)
    }

    const onInputChange = ({target},validations,type) => {
    
        let {name,value} = target
        //value = parseFloat(value) TODO: Se comento esto... ver si no genera bugs

        if(validations){
            switch (validations){

                case  'positiveNumber':{
                    
                    value = parseFloat(value)

                    if(
                        (typeof(value)!='number')|| 
                        value < 0 || 
                        isNaN(value) 
                        //((/^0+/.test(value)) && value.toString().length>1 ) TODO: Que si el valor es ej 001 se borren los ceros
                        ) value=0
                }
            }

        }
        
        setFormState({
            
            ...formState,
            [name]: value   //TODO: Quitar parseFloat de aqui ya que me limitaria a que solo funciona para numeros
        })
        
        
    }

    return{
        ...formState,
        formState,
        onInputChange,
        updateForm
    }

}

