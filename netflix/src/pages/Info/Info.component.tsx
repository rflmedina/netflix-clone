import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ApiTmbService from "~/services";

import VideoFrame from "~/components/atoms/VideoFrame";
import { Container } from "./Info.styles";
import Title from "~/components/atoms/Title";
import { Helmet } from "react-helmet";
import List from "~/components/molecules/List";

const Info = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>();
  const [relatedTitles, setRelatedTitles] = useState<any>()
  const [videoKey, setVideoKey] = useState<string>();

  const imgUrl = "https://image.tmdb.org/t/p/w300";

  const originalImgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    if (!id || movie) return;
    ApiTmbService.getMovieDetails(+id).then((response) => {
      setMovie(response);

      const video =
        response.videos &&
        response.videos.results &&
        response.videos.results[0];
      video && setVideoKey(video.key);
    });


    ApiTmbService.getSimilarTitles(+id).then((response) => {
      const movieImgs = response.results.map((result: any) => {
        return {
          ...result,
          backdrop_path: originalImgUrl + result.backdrop_path,
          poster_path: imgUrl + result.poster_path,
        }
      })
      setRelatedTitles(movieImgs)
    })
  }, [id, movie]);

  function getDateYear(releaseDate: string) {
    const newDate = new Date(releaseDate);
    return newDate.getFullYear();
  }

  return (
    <>
      <Helmet title="Netflix" />
      <Container>
        {videoKey ? (
          <VideoFrame videoKey={videoKey + ""} />
        ) : (
          <>
            <div className="movie-titulo">
              <h1>{movie && movie.title}</h1>
              <h1
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  color: "#e50914",
                }}
              >
                {movie && getDateYear(movie.release_date)}
              </h1>
            </div>
            <br />
            <p>{movie && movie.overview}</p>

            {movie && movie.backdrop_path && (
              <img
                style={{
                  width: "20rem",
                  marginTop: "20px",
                  marginLeft: "30%",
                }}
                src={imgUrl + movie.backdrop_path}
                alt=""
              />
            )}
          </>
        )}

        {relatedTitles && <List title='Títulos Semelhantes' moviesImg={relatedTitles} />}
      </Container>
    </>
  );
};

export default Info;
