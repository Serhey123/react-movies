export const getMoviesList = state => state.movies.moviesList;
export const getTrendingMoviesList = state => state.movies.trendingMoviesList;
export const getCurrentMovie = state => state.movies.currentMovie.movie;
export const getCurrentMovieCast = state => state.movies.currentMovie.cast;
export const getCurrentMovieReview = state => state.movies.currentMovie.review;
export const getLoader = state => state.movies.isLoading;
export const getError = state => state.movies.error;
