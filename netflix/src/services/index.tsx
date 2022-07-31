import api from "../config/api";

const params = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'pt-BR',
}

interface PaginationInterface {
  page: number
  results: any[]
  total_results: number
  total_pages: number
}

async function getPolular() {
  return await api.get<any>('/movie/popular', { params })
      .then((response) => response.data)
}

async function getTopRated() {
  return await api.get<any>('/movie/top_rated', { params })
      .then((response) => response.data)
}

async function getMovieDetails(movieId: number) {
  const detailParams = { ...params, append_to_response: 'videos' }
  return await api.get<any>('/movie/' + movieId, { params: detailParams })
      .then((response) => response.data)
}

async function getSimilarTitles(movieId: number) {
  return await api.get(`/movie/${movieId}/similar`)
  .then((response) => response.data)
}

export {
  getPolular,
  getTopRated,
  getMovieDetails,
  getSimilarTitles,
}