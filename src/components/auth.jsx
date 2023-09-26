import React, { useState } from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';


async function login (user,pass,navigate){

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
        navigate('/panel')
    }
}

export default function Auth() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()


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
            <button onClick={()=>{login(username,password,navigate)}} className='loginBtn' >Iniciar Sesion</button>
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
