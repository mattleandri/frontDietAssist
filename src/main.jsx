import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
//Pages and Loaders
import Root from './Root'
import ErrorPage from './ErrorPage'
import VerPacientes, { loader as patientsLoader } from './routes/verPacientes'
import CrearAlimento from './routes/crearAlimento'
import CrearPlan from './routes/crearPlan'
import Auth from './components/auth'

const router=createBrowserRouter([
  {
    path:'/auth',
    element:<Auth/>
  },
  {
    path:"/panel",
    element: <Root/>,
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
