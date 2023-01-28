const KEY = 'b8e8b8dadac797da0595c7d7e1af61f4';

export function fetchTrending() {
  return fetch(`
  https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`).then(res =>
    res.json(),
  );
}

export function fetchMovie(query) {
  return fetch(`
  https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`).then(
    res => res.json(),
  );
}

export function fetchMovieById(id) {
  return fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`).then(res =>
    res.json(),
  );
}

export function fetchMovieCast(id) {
  return fetch(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`).then(
    res => res.json(),
  );
}

export function fetchMovieReview(id) {
  return fetch(`
  https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`).then(res =>
    res.json(),
  );
}
