import { getPlan } from "../api"

export function setPlan(dispatch,plan){
    dispatch(
        {type: 'setPlan',
        payload: plan
    })
}

export function addDay(dispatch,dayData){
    dispatch({
        type:'addDay',
        payload: dayData
    })
}

export function deleteDay(dispatch,dayName){
    dispatch({
        type:'deleteDay',
        payload: dayName
    })
}

export function setDayName(dispatch,dayNames){
    dispatch({
        type:'setNameDay',
        payload:dayNames
    })
}

//AsyncActions

