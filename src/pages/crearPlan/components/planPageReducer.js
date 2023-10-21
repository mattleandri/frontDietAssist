
export function planReducer(state,{type,payload}){

    switch(type){
        case 'setPlan':
            return {
                ...payload
            }
    
        case 'addDay':
            return{
                ...state , 
                days:[...state.days , {name:payload,  autoCalculate:false , meals: []}]
            }
    }
    
    throw Error('Unknown action: ' + type);

}