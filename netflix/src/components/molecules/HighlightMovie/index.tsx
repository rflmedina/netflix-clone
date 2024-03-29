import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../atoms/Title";
import { Container, Info } from "./styles";

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

interface HighlightMovieInterface {
  movie: any;
}

const HighlightMovie = ({ movie }: HighlightMovieInterface) => {
  const navigate = useNavigate();

  const sendToMovie = (id: number) => {
    navigate("/browse/" + id);
  }

  console.log(movie)

  return (
    <Container
      style={{
        backgroundImage: `url(${movie.backdrop_path})`,
      }}
    >
      <Info>
        <Title>{movie.title}</Title>
        <h2>{movie.overview}</h2>
        <br />
        <button onClick={() => sendToMovie(movie.id)}>
          <FaPlay />
          Assistir</button>
        <button onClick={() => sendToMovie(movie.id)}>
          <AiOutlineInfoCircle/>
          Mais informações</button>
      </Info>
    </Container>
  )
}

export default HighlightMovie;
