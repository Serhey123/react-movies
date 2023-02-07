import axios from 'axios';

const KEY = 'b8e8b8dadac797da0595c7d7e1af61f4';

export function fetchTrending() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
    .then(res => res.data.results);
}

export function fetchMovie(query) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`,
    )
    .then(res => res.data.results);
}

export function fetchMovieById(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    .then(res => res.data);
}

export function fetchMovieCast(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`)
    .then(res => res.data.cast);
}

export function fetchMovieReview(id) {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`)
    .then(res => res.data.results);
}
