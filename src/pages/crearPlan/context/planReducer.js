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
            return {
                ...state,
                searchFood : payload
            }

        case 'cleanSearch':
            return{
                ...state,
                searchFood: []
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
                selectedFoods: state.selectedFoods.filter( food => food._id != payload)
            }

        case 'setGoals':
            return{
                ...state,
                goals : {...goals, p:payload.p, c:payload.c,  f:payload.f, kcal:payload.kcal }
            }

        case 'setMacros':
            return{
                ...state,
                macros: payload
            }

        case 'changeAmount':
            return{
                ...state,
                selectedFoods: state.selectedFoods.map(
                    food => food._id == payload.id? 
                    {...food , selectedAmount:payload.selectedAmount} 
                    : food
                )
            }

        default:
            return state
    }


}