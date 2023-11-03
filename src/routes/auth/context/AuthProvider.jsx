import { loginVerif } from './api' 
import { useReducer } from 'react'
import {AuthContext} from './AuthContext'
import { authReducer } from './authReducer'
import { checkToken } from './checkToken'

//Podriamos ya consumir AuthContext para enviar su valor por defecto en el value pero no nos interesa eso ahora
//Sera un estado para que pueda ser modificado



export default function AuthProvider({children}) {

    const [auth,dispatch] = useReducer(authReducer,null,checkToken)



    const loginActions={
        login : async (username,password,navigate) => {const resp = await loginVerif(username,password,navigate) ; if(resp) login(username) } ,
        logout: async() => {logout()}
    }



    const login = (username) =>{
        dispatch({
            type:'login',
            payload:{username: username}
        })
    }
    
    
    const logout = () =>{
        dispatch({
            type:'logout',
        })
    }
    

  return (

    <AuthContext.Provider value={{auth,...loginActions}} >
        {children}
    </AuthContext.Provider>

  )
}
