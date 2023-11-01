import Helpers from "./Helpers";
import { MOVIE_CAST, MOVIE_DETAILS, MOVIE_VIDEO, NOW_PLAYING, POPULAR_MOVIE_URL, SEARCH_MOVIE_URL, TOP_RATED_MOVIE_URL, TRENDING_MOVIE_URL, UPCOMING_MOVIE_URL } from "./Constant";

export function searchmovie(searchterm) {
    return Helpers(SEARCH_MOVIE_URL + searchterm, 'GET')
}
export function showmovie() {
    return Helpers()
}
export function topratedmovie() {
    return Helpers(TOP_RATED_MOVIE_URL)
}
export function upcomingmovie() {
    return Helpers(UPCOMING_MOVIE_URL)
}
export function popularmovies() {
    return Helpers(POPULAR_MOVIE_URL)
}
export function topratedseries() {
    return Helpers(TRENDING_MOVIE_URL)
}
export function getMovieDetails(id) {
    return Helpers(MOVIE_DETAILS + id, "GET");
}
export function getMoviecast(id) {
    return Helpers(MOVIE_CAST(id), "GET");
}
export function getMovieVideo(id) {
    return Helpers(MOVIE_VIDEO(id), "GET");
}
export function getNowMovie(count) {
    return Helpers(NOW_PLAYING(count));
}
