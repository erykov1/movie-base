import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'https://at.usermd.net/api/user/auth',
      data: {
        login: username,
        password: password,
      }
    }).then((response) => {
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className='login-form-container'>
      <div className='login-form'>
        <h2 id='main-text'> Zaloguj się i przeglądaj filmy na Movie Base </h2>
        <form className='form-content'>
          <div className="form-group">
            <label for="login-content">Login : </label>
            <input type="login" class="form-control" id="login-content" placeholder="Wpisz nazwę użytkownika" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <label for="password-content">Hasło : </label>
            <input type="password" class="form-control" id="password-content" placeholder="Wpisz hasło" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className='signin-btn' onClick={handleSubmit}>Zaloguj się</button>
        </form>
      </div>
      <div className='register-route'>
        Nie masz jeszcze konta ? Załóż je
        <button className='signup-btn' onClick={() => navigate('/signup')}> Załóż konto </button>
        <button className='signup-btn' onClick={() => navigate('/')}> Powrót </button>
      </div>
      <div className='fill-content'>
        <img src={'https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg'} id='img-fill'/>
      </div>
    </div>
  )
}

export default LoginForm