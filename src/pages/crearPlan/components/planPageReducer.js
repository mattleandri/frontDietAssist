
export function planReducer(state,{type,payload}){

    switch(type){
        case 'refresh':
            return{
                ...state,
                refresh:!state.refresh
            }
        case 'setPlan':
            return {
                ...payload,
                refresh:true
            }
    
        case 'addDay':
            const newSate = {
                ...state , 
                days:[...state.days , payload]
            }
            return newSate

        case 'setNameDay':
            return {
                ...state,
                days:[ ...state.days.map(day=>{
                    if(day.name == payload.previousName ) return ({...day , name:payload.newName})
                    else return day
                })  ]
            }

            console.log(newSate)
            return newSate

        case 'deleteDay':
            return{
                ...state,
                days:[ ...state.days.filter(day => day.name != payload) ]
            }
        
    }
    
    throw Error('Unknown action: ' + type);

}