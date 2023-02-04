import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  let navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'https://at.usermd.net/api/movies',
      data: {
        title: title,
        image: img,
        content: desc
      }
    }).then((response) => {
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className='add-movie-container'>
      <h2 id='main-text'> Dodaj Film </h2>
      <div className='add-movie-content'>
        <div className='add-movie-content-form'>
          <form className='movie-form-content'>
            <div className="movie-form-group">
              <label for="title-content">Tytuł filmu : </label>
              <input type="text" class="form-control" id="title-content" placeholder="Tytuł filmu" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="movie-form-group">
              <label for="desc-content">Krótki opis : </label>
              <input type="textarea" class="form-control" id="desc-content" placeholder="Krótki opis" onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div className="movie-form-group">
              <label for="genre-content">Link do zdjęcia : </label>
              <input type="text" class="form-control" id="genre-content" placeholder="Gatunek" onChange={(e) => setImg(e.target.value)}/>
            </div>
            <button className='add-movie-btn' onClick={handleSubmit}> Dodaj Film </button>
            <button className='add-movie-btn' onClick={() => navigate('/')}> Powrót </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMovie