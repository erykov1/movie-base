import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  let navigate = useNavigate()

  const routeChangeSignIn = () =>{  
    navigate('/signin')
  }

  const routeChangeSignUp = () =>{  
    navigate('/signup')
  }

  return (
    <div className='navbar-section'>
      <div className='input-group'> 
        <input type="text" className='form-navbar' placeholder='wyszukaj ...'/>
      </div>
      <div className='login-registration'>
        <button className='loginBtn' onClick={routeChangeSignIn}> zaloguj się </button>
        <button className='loginBtn' onClick={routeChangeSignUp}> zarejestruj się </button>
      </div>
    </div>
  )
}

export default Navbar