import React from 'react'

const FilmSection = ({imgPath, title, desc, genre, grade}) => {

  return (
    <div className='film-section'>
      <div className='film-section-img'>
        <img src={imgPath} alt='obrazek wstawionego filmu' id='movie-img'/>
      </div>
      <div className='film-section-title-desc'>
        <div className='film-section-grade'>
          <img src={require('../assets/img/star-symbol-icon.png')} alt="ikona oceny filmu" id='star-img'/>
          {grade}
        </div>
        <div className='film-section-title'>
          {title}
        </div>
        <div className='film-section-desc'>
          {desc}
        </div>
        <div className='film-section-genre'>
          Gatunek : {genre}
        </div>
      </div>
    </div>
  )
}

export default FilmSection