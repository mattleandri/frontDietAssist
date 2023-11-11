import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"

export function PublicRouter({children}) {
    
    const authContext = useContext(AuthContext)
    
    if(authContext.auth.logged!=true)
    return (children)

    //TODO: crear Panel y navegar solo a /panel
    return <Navigate to='/panel/crearPlan'/>
}
