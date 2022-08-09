import React, { useEffect, useState } from 'react'
import HighlightMovie from '~/components/molecules/HighlightMovie'
import List from '~/components/molecules/List'
import * as ApiTmbService from '~/services/index'
import Helmet from 'react-helmet'
import Header from '~/components/molecules/Header'
import { Loader } from '~/components/atoms/Loader'


function Home() {
  const [popularMovies, setPopularMovies] = useState<any[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([])
  const [highlightMovie, setHighlightMovie] = useState<any>()
  const [loader, setLoader] = useState<boolean>(true)


  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const originalImgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    const searchPopular = () => {
      ApiTmbService.getPolular()
        .then((response) => {
          const movieImgs = response.results.map((result: any) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
            }
          })
          setPopularMovies(movieImgs)
        })
    }

    const searchTopRated = () => {
      ApiTmbService.getTopRated()
        .then((response: any) => {
          const movieImgs = response.results.map((result: any) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
            }
          })
          setTopRatedMovies(movieImgs)
        })
    }

    searchPopular()
    searchTopRated()
  }, [])

  useEffect(() => {
    if (!popularMovies.length) return

    const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)]

    setHighlightMovie(movie)
    setLoader(false)

  }, [popularMovies])

  return <>
  {
    loader ? <Loader /> : <>
       <Header />
    <Helmet title="ínicio - Netflix" />
    {highlightMovie && (<HighlightMovie movie={highlightMovie} />)}
    <List title='Populares' moviesImg={popularMovies} />
    <List title='Top Assistidos' moviesImg={topRatedMovies} /> 
    </> 
  }
   
  </>
}

export default Home