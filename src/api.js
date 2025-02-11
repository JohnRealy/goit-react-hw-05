import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_TMDB_KEY;
if (!API_KEY) {
  console.error("API ключ не знайдено!");
}
export async function fetchTrendingMovie() {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return data.results;
}

export async function fetchMovieDetails(movieId) {
  const data = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
}

export async function fetchMovieCast(movieId) {
  const data = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return data;
}

export async function fetchMovieReviews(movieId) {
  const data = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return data;
}

export async function fetchMovieByQuery(query) {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
}
