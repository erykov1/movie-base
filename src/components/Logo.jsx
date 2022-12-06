import React from 'react';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={require('../assets/img/cinema.png')} alt='logo'/>
      <h1>Movie Base</h1>
    </div>
  )
}

export default Logo