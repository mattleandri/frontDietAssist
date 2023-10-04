import { useReducer } from 'react'
import {AuthContext} from './AuthContext'
import { authReducer } from './authReducer'
import { checkToken } from './checkToken'

//Podriamos ya consumir AuthContext para enviar su valor por defecto en el value pero no nos interesa eso ahora
//Sera un estado para que pueda ser modificado



export default function AuthProvider({children}) {

    const [auth,dispatch] = useReducer(authReducer,null,checkToken)

    const login = () =>{
        dispatch({
            type:'login',
            payload:{username:'MattLeandri', id:123}
        })
    }
    
    
    const logout = () =>{
        dispatch({
            type:'logout',
    
        })
    }
    

  return (

    <AuthContext.Provider value={{auth,login,logout}} >
        {children}
    </AuthContext.Provider>

  )
}
