import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className='input-group'> 
        <input type="text" className='form-navbar' placeholder='wyszukaj ...'/>
      </div>
      <div className='login-registration'>
        <button className='loginBtn'> zaloguj się </button>
        <button className='loginBtn'> zarejestruj się </button>
      </div>
    </div>
  )
}

export default Navbar