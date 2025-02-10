import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export default function api() {
  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  if (!API_KEY) {
    console.error("API ключ не знайдено!");
  }
  const {data} = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return data.movies;
}
