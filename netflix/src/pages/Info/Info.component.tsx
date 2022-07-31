import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import { useParams } from "react-router-dom";
import * as ApiTmbService from "~/services";

import VideoFrame from "~/components/atoms/VideoFrame";
import { Container as Cont, Details } from "./Info.styles";
import { Helmet } from "react-helmet";
import List from "~/components/molecules/List";

const Info = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>();
  const [relatedTitles, setRelatedTitles] = useState<any>();
  const [videoKey, setVideoKey] = useState<string>();

  const imgUrl = "https://image.tmdb.org/t/p/w300";

  const originalImgUrl = "https://image.tmdb.org/t/p/original";

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
      const related = response.results.map((result: any) => {
        return {
          ...result,
          backdrop_path: originalImgUrl + result.backdrop_path,
          poster_path: imgUrl + result.poster_path,
        };
      });
      setRelatedTitles(related);
    });
  }, [id, movie]);

  const getDateYear = (releaseDate: string) => {
    const newDate = new Date(releaseDate);
    return newDate.getFullYear();
  };

  return (
    <>
      <Helmet title="Netflix" />
      <Cont>
        {videoKey && <VideoFrame videoKey={videoKey + ""} />}

        {movie && (
          <>
              <Details>
                {movie.poster_path && (
                      <img src={imgUrl + movie.poster_path} alt="" />
                    )}
                  
                <Container>
                <Row>
                  <Col>
                    <h3>
                      {movie.title} ({getDateYear(movie.release_date!)})
                    </h3>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Avaliação média</p>
                    {movie.vote_average}
                  </Col>

                  <Col>
                    <p>Total de votos</p>
                    {movie.vote_count}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h4>Sinopse</h4>
                  </Col>
                </Row>

                <Row>
                  <Col>{movie.overview}</Col>
                </Row>

                </Container>
              </Details>
          </>
        )}

        {relatedTitles && (
          <List title="Títulos Semelhantes" moviesImg={relatedTitles} />
        )}
      </Cont>
    </>
  );
};

export default Info;
