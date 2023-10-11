import { useState } from "react";

export function useFrom (form = {}) {

    const [formState,setFormState] = useState(form)

    const onInputChange = ({target}) => {

        console.log(target)
        const{name,value} = target
        console.log(name)
        setFormState({
            ...formState,
            [name]:value
        })

    }

    return{
        formState,
        onInputChange
    }

}

