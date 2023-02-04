import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  let navigate = useNavigate()

  const redirectToSignIn = () =>{  
    navigate('/signin');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'https://at.usermd.net/api/user/create',
      data: {
        name: username,
        email: email,
        password: password,
      }
    }).then((response) => {
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className='signup-container'>
      <h2 id='main-text'> Zarejestruj się i uzyskaj dostęp do recenzji filmów na Movie Base </h2>
      <form className='form-content'>
        <div className="form-group">
          <label for="login-content">Login : </label>
          <input type="login" class="form-control" id="login-content" placeholder="Wpisz nazwę użytkownika" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="email-content">Email : </label>
          <input type="text" class="form-control" id="email-content" placeholder="Wpisz email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="password-content">Hasło : </label>
          <input type="password" class="form-control" id="password-content" placeholder="Wpisz hasło" onChange={(e) => setPassword(e.target.value)}/>
        </div>
          <button className='signup-btn' onClick={handleSubmit}>Utwórz konto</button>
      </form>
      <div className='register-route'>
        Posiadasz już konto ? Zaloguj się
        <button className='signup-btn' onClick={redirectToSignIn}> Zaloguj się </button>
        <button className='signup-btn' onClick={() => navigate('/')}> Powrót </button>
      </div>
      <div className='fill-content'>
        <img src={'https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg'} id='img-fill'/>
      </div>
    </div>
  )
}

export default SignUpForm