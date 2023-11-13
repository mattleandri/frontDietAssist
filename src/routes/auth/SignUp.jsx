import { AuthContext } from "./context/AuthContext";
import { useContext } from "react" 
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks";

export default function SignUp({setHasAccount}) {

    const navigate = useNavigate()
    const {signup} = useContext(AuthContext)
    const authContext= useContext(AuthContext)

    const {username,password,password2,surname,name,onInputChange} = useForm({})

    console.log(username,password,password2,surname,name)

  return (
   <div className="sigInContainer">
    <div className="tittle container ">
              <p>Sign Up</p>
          </div>
          <div className="userDiv container ">
              <input onChange={onInputChange} className='userInput' placeholder='username' name="username"></input>
              <i className='bx bxs-user' ></i>
          </div>
          <div className="passDiv container ">
              <input onChange={onInputChange} className='passInput' type='password' placeholder='password' name="password"></input> 
              <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="passDiv container ">
              <input onChange={onInputChange}  className='passInput' type='password' placeholder='repeat password' name="password2"></input> 
              <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="userDiv container ">
              <input onChange={onInputChange}  className='userInput' placeholder='surname' name="surname"></input>

          </div>
          <div className="passDiv container ">
              <input onChange={onInputChange}  className='passInput' placeholder='name' name="name"></input> 

          </div>
          <div className="optionsDiv container"></div>
          <div className="loginDiv container ">
              <button onClick={()=>{signup({username,password,password2,surname,name})}} className='loginBtn' >Registrarse</button>
          </div>
          <div className="footer container mt-40">
            <span >
                <p className='optionRegistro'>Ya tienes cuenta? <p className="clickeable subrayado" onClick={()=>setHasAccount(true)}>Iniciar Sesion</p> </p> 
            </span>
        </div>
    </div>
  )
}
