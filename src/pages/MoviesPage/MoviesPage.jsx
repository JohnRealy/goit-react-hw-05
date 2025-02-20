import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../api";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchMovieByQuery(query);
      setMovies(data.results);
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("query", inputValue);
    setSearchParams(searchParams);
  };
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>

      <ul className={s.list}>
        <MovieList movies={movies} />
      </ul>
    </div>
  );
}
