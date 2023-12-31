import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"

export function PrivateRouter({children}) {
    
    const authContext = useContext(AuthContext)

    if(authContext.auth.logged==true) return (children)
    
    return <Navigate to='/auth'/>
}
