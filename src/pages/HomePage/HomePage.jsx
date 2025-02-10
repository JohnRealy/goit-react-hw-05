import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { fetchTrendingMovie } from "../../api";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [moviesToday, setMoviesToday] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchTrendingMovie();
      setMoviesToday(data);
    }
    fetchMovies();
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today</h2>
      <ul className={s.list}>
        {moviesToday.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
