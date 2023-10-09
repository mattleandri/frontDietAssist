import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



async function handleLogin (user,pass,login,navigate){

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
            'username':user,
            'password':pass
        })
    })

    const data = await response.json()

    if(response.status == 200) {
        localStorage.setItem('accesToken',data.token)
        await login()
        navigate('/panel')
        
    }

    if(response.status == 401 ){
        //navigate('/auth')
        alert('Usuario/Contrasenia incorrecta')
    }
}

export function Auth() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const authContext= useContext(AuthContext)
    console.log(authContext)


  return (
    <div className='fullPage'>
      <div className="sigInContainer">
        <div className="tittle container ">
            <p>Log-In</p>
        </div>
        <div className="userDiv container ">
            <input onChange={e => setUsername(e.target.value)} className='userInput' placeholder='username'></input>
            <i className='bx bxs-user' ></i>
        </div>
        <div className="passDiv container ">
            <input onChange={e => setPassword(e.target.value)} className='passInput' type='password' placeholder='password'></input> 
            <i className='bx bxs-lock-alt' ></i>
        </div>
        <div className="optionsDiv container">
            <p className='optionRecordar' >Recordarme</p>
            <button type='checkbox' className='check'></button>
        </div>
        <div className="loginDiv container ">
            <button onClick={()=>{handleLogin(username,password,login,navigate)}} className='loginBtn' >Iniciar Sesion</button>
        </div>
        <div className="footer container">
            <span >
                <p className='optionRegistro'>Aun no tienes cuenta?  <a href='/'> Registrarse</a> </p> 
            </span>
        </div>
      </div>
    </div>
  )
}
