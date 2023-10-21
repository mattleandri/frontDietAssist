import { useEffect } from "react";


export function useAsyncEffect(asyncFunction,syncFunction,dependences){

    useEffect(()=>{
        const asyncEffect = async ()=> asyncFunction()

        asyncEffect? asyncEffect():null
        syncFunction? syncFunction():null

    },dependences?dependences:null)


}

