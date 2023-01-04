import React from 'react'
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

  let navigate = useNavigate()

  const redirectToSignUp = () => {  
    navigate('/signup');
  }

  const submitData = ({login, password}) => {
    console.log(login, password)
  }

  return (
    <div className='login-form-container'>
      <div className='login-form'>
        <h2 id='main-text'> Zaloguj się i przeglądaj filmy na Movie Base </h2>
        <form className='form-content'>
          <div className="form-group">
            <label for="login-content">Login : </label>
            <input type="login" class="form-control" id="login-content" placeholder="Wpisz nazwę użytkownika" />
          </div>
          <div className="form-group">
            <label for="password-content">Hasło : </label>
            <input type="password" class="form-control" id="password-content" placeholder="Wpisz hasło" />
          </div>
          <button className='signin-btn'>Zaloguj się</button>
        </form>
      </div>
      <div className='register-route'>
        Nie masz jeszcze konta ? Załóż je
        <button className='signup-btn' onClick={redirectToSignUp}> Załóż konto </button>
      </div>
      <div className='fill-content'>
        <img src={'https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg'} id='img-fill'/>
      </div>
    </div>
  )
}

export default LoginForm