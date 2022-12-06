import React from 'react'

const MovieSection = ({imgPath, title, desc, genre, grade}) => {

  return (
    <div className='movie-section'>
      <div className='movie-section-img'>
        <img src={imgPath} alt='obrazek wstawionego filmu' id='movie-img'/>
      </div>
      <div className='movie-section-title-desc'>
        <div className='movie-section-grade'>
          <img src={require('../assets/img/star-symbol-icon.png')} alt="ikona oceny filmu" id='star-img'/>
          {grade}
        </div>
        <div className='movie-section-title'>
          {title}
        </div>
        <div className='movie-section-desc'>
          {desc}
        </div>
        <div className='movie-section-genre'>
          Gatunek : {genre}
        </div>
      </div>
    </div>
  )
}

export default MovieSection