import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  let navigate = useNavigate()
  const movieInfo = [ 
    {}
  ]
  const [movie, setMovie] = useState(movieInfo);
  const { id } = useParams() 
  const token = localStorage.getItem("token");
  const isAdmin = decodeToken(token)?.role

  useEffect(() => {
    console.log(id)
    getMovie()
  }, [])

  const getMovie = () => {
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies/${id}`
    })
    .then((response) => {
      setMovie(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const deleteMovie = () => {
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/movie/${id}`
    })
    .then((response) => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='movie-details-container'>
      <div className='movie-details-img'>
        <img src={movie?.image} alt='zdjecie filmu' id='img-details'></img>
      </div>
      <div className='movie-section-title-desc'>{movie?.content}</div>
      <div className='movie-section-title'>{movie?.title}</div>
      <button className='btn-details' onClick={() => navigate('/')}>Powrót</button>
      {isAdmin && <>
        <button className='btn-delete' onClick={deleteMovie}>Usuń</button>
      </>}
    </div>
  )
}

export default MovieDetails