export const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTQ1YzcxZmYwMjBiZjJlZTBkMGIyZDkzNzI4NzRmNSIsInN1YiI6IjY1MWNmY2IxMDcyMTY2MDBjNTY4YmQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOM3lajdobgQxCMIkqBZFNITJIq3xOePaF8wdTQz9Jc"
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?page=1&query=";
export const TOP_RATED_MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US";
export const UPCOMING_MOVIE_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TRENDING_MOVIE_URL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/"

export const MOVIE_CAST = (id) => `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
export const MOVIE_VIDEO = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
export const NOW_PLAYING = (count) => `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${count}`;