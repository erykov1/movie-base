import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieSection = ({imgPath, title, desc, id}) => {
  let navigate = useNavigate()

  return (
    <div className='movie-section'>
      <div className='movie-section-img'>
        <img src={imgPath} alt='obrazek wstawionego filmu' id='movie-img' width='300'/>
      </div>
      <div className='movie-section-title-desc'>
        <button className='btn-details' onClick={() => navigate(`/details/${id}`)}> Przejdź do filmu </button>
        <div className='movie-section-title'>
          {title}
        </div>
        <div className='movie-section-desc'>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default MovieSection