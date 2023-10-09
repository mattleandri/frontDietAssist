import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AuthProvider from './auth/context/AuthProvider'

//Pages and Loaders
import {CrearPlan , CrearAlimento , VerPacientes , loader as patientsLoader} from '../pages'
import ErrorPage from './ErrorPage'
import {Panel}   from './panel'
import { PublicRouter , PrivateRouter } from './router'
import {Auth} from './auth/'
 
const router=createBrowserRouter([
  {
    path:'/auth',
    element:  
      <PublicRouter>
        <Auth/>
      </PublicRouter>
  },
  {
    path:'/panel',
    element: 
      <PrivateRouter>
        <Panel/>
      </PrivateRouter>
      ,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/panel/verPacientes',
        element: <VerPacientes/>,
        loader:patientsLoader
      },
      {
        path:'/panel/crearAlimento',
        element: <CrearAlimento/>
      },
      {
        path:'/panel/crearPlan',
        element: <CrearPlan/>
      },
    ]
  },
  {
    path:'/*',
    element:<h1>Page not found ...</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router}/>
    </AuthProvider> 
  </React.StrictMode>,
)
