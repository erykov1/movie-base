import React from 'react'
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {

  let navigate = useNavigate()

  const redirectToSignIn = () =>{  
    navigate('/signin');
  }

  return (
    <div className='signup-container'>
      <h2 id='main-text'> Zarejestruj się i uzyskaj dostęp do recenzji filmów na Movie Base </h2>
      <form className='form-content'>
        <div className="form-group">
          <label for="login-content">Login : </label>
          <input type="login" class="form-control" id="login-content" placeholder="Wpisz nazwę użytkownika" />
        </div>
        <div className="form-group">
          <label for="name-content">Nazwa : </label>
          <input type="text" class="form-control" id="name-content" placeholder="Wpisz nazwę" />
        </div>
        <div className="form-group">
          <label for="email-content">Email : </label>
          <input type="text" class="form-control" id="email-content" placeholder="Wpisz email" />
        </div>
        <div className="form-group">
          <label for="password-content">Hasło : </label>
          <input type="password" class="form-control" id="password-content" placeholder="Wpisz hasło" />
        </div>
          <button className='signup-btn'>Utwórz konto</button>
      </form>
      <div className='register-route'>
        Posiadasz już konto ? Zaloguj się
        <button className='signup-btn' onClick={redirectToSignIn}> Zaloguj się </button>
      </div>
      <div className='fill-content'>
        <img src={'https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg'} id='img-fill'/>
      </div>
    </div>
  )
}

export default SignUpForm