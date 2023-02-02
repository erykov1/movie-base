import React, {useState, useEffect} from 'react'
import MovieSection from '../components/MovieSection'
import Navbar from '../components/Navbar'
import axios from "axios";
import Logo from '../components/Logo'

const MoviePage = () => {
  const movie = [ 
    {}
  ]
  const [movies, setMovies] = useState(movie);

  useEffect(() => {
    console.log("movie data")
    getMovie()
  }, [])

  const searchMovie = (search, event) => {
    event.preventDefault()

    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies`
    })
    .then((response) => {
      const filteredMovie = response.data.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
      setMovies(filteredMovie)
    }).catch((error) => {
      console.log(error)
    })
  }

  const getMovie = () => {
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies`
    })
    .then((response) => {
      setMovies(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='main-movie-page'>
      <div className='top-side'>
          <Logo />
          <Navbar search={searchMovie}/>
      </div>
      <div className='movie-section-fill'>
        {movies?.map((movie) => <MovieSection imgPath={movie.image} title={movie.title} desc={movie.content} id={movie.id}/> )}
      </div>
    </div>
  )
}

export default MoviePage