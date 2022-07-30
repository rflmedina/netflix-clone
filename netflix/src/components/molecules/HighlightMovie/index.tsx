import React from "react"
import { useNavigate } from 'react-router-dom'
import Title from '../../atoms/Title'

interface HighlightMovieInterface {
  movie: any
}

function HighlightMovie({ movie }: HighlightMovieInterface) {
  const navigate = useNavigate()

  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }

  console.log(movie)

  return (
    <div style={{
      backgroundImage: `url(${movie.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '94vh',
    }}>
      <div style={{
        background: 'linear-gradient(to top, #111 10%, transparent 90%',
        height: 'inherit',
      }}>
        <div style={{
          backgroundImage: 'linear-gradient(to right, #111 20%, transparent 80%',
          height: 'inherit',
        }}>
        
          <Title>{movie.title}</Title>
          <h2>{movie.overview}</h2>
          <br />
          <button
            onClick={() => sendToMovie(movie.id)}
          >Assistir</button>
        </div>
      </div>
    </div>
  )
}

export default HighlightMovie