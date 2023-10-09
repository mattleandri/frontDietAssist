export function planReducer(state,{type,payload}){

    switch (type) {
        case 'searchFood':
            console.log('entro ')
            return {
                ...state,
                searchFood : payload
            }
            
            
        case 'addFood':
            return{
                ...state,
                selectedFoods : [...state.selectedFoods , payload]
                
            }
            
        default:
            return state
    }


}