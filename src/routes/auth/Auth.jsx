import PORTFOLIO from '../../images/PORTFOLIO.png'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import '../../styles/auth.css';
import SignIn from './SignIn';
import SignUp from './SignUp';


export function Auth() {

    const [hasAccount,setHasAccount] = useState(true)

  return (
    <div className='fullPage'>
      <div className="flexV wBG portfolioImgPos">
      <img src={PORTFOLIO} size alt="..." className='img' />
      </div>
      <div className="flexV">
        {hasAccount? <SignIn setHasAccount={setHasAccount}/> : <SignUp setHasAccount={setHasAccount}/>}
      </div>
    </div>
  )
}
