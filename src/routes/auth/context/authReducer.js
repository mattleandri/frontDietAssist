

export function authReducer(state,{type,payload}){

    switch (type) {
        case 'login':
            return {
                logged:true,
                username:payload.username,
                id:payload.id
                
            }
            
            
        case 'logout':
            return{
                logged:false,
                username:'',
                id:''
            }
            
        default:
            return state
    }


}