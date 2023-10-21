import { getPlan } from "../api"

export function setPlan(distpatch,plan){
    console.log('entro')
    distpatch(
        {type: 'setPlan',
        payload: plan
    })
}

export function addDay(distpatch,dayName){

    distpatch({
        type:'addDay',
        payload: dayName
    })

    addDay('dayName')
}


//AsyncActions