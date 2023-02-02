import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { isExpired, decodeToken  } from "react-jwt";
import axios from "axios";
import { useState } from 'react';

const Navbar = ({search}) => {
  let navigate = useNavigate()
  const [word, setWord] = useState()
  const user = decodeToken(localStorage.getItem('token'));
  const isNotLogged = isExpired(localStorage.getItem('token'));

  const routeChangeSignIn = () =>{  
    navigate('/signin')
  }

  const routeChangeSignUp = () =>{  
    navigate('/signup')
  }

  const handleLogout = (event) => {
    event.preventDefault()
    axios({
      method: 'delete',
      url: 'https://at.usermd.net/api/user/logout/:userId',
      data: {
        userId: user.userId
      }
    }).then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className='navbar-section'>
      <div className='input-group'> 
        <button className='btn-details' onClick={(e) => search(word, e)}> Wyszukaj </button>
        <input type="text" className='form-navbar' placeholder='wyszukaj ...' onChange={(e) => setWord(e.target.value)}/>
      </div>
      <div className='login-registration'>
        {isNotLogged && <>
          <button className='loginBtn' onClick={() => navigate('/signin')}> zaloguj się </button>
          <button className='loginBtn' onClick={() => navigate('/signup')}> zarejestruj się </button> </>}
        {!isNotLogged && <>
          <button className='loginBtn' onClick={handleLogout}> wyloguj się </button>
          <button className='loginBtn' onClick={() => navigate('/add')}> dodaj film </button>
        </>}
      </div>
    </div>
  )
}

export default Navbar