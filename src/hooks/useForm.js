import { useState } from "react";

export function useForm (form = {}) {

    const [formState,setFormState] = useState(form)

    const updateForm = (newVal)=>{
        setFormState(newVal)
    }

    const onInputChange = ({target}) => {
    
        const {name,value} = target

        setFormState({
            ...formState,
            [name]: parseFloat(value)
        })

    }

    return{
        ...formState,
        formState,
        onInputChange,
        updateForm
    }

}

