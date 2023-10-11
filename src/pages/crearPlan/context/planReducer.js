//Crear otro Context para la busqueda de la comida

/*
    selectedFoods:[],
    goals:[{p:0,c:0,f:0}],
    distribution:[],
    searchFood:[]
  }
*/

export function planReducer(state,{type,payload}){

    switch (type) {
        case 'searchFood':
            console.log('entro ')
            return {
                ...state,
                searchFood : payload
            }
            
            
        case 'addFood':
            if(state.selectedFoods.find(food => food._id == payload._id))return state
            else{        
                return{
                    ...state,
                    selectedFoods : [...state.selectedFoods , payload]   
                }
            }

        case 'deleteFood':
            return{
                ...state,
                selectedFoods: state.selectedFoods.filter( food => food.id != payload)
            }

        case 'setGoals':
            return{
                ...state,
                goals :{...goals, p:payload.p, c:payload.c,  f:payload.f, kcal:payload.kcal }
            }

        default:
            return state
    }


}