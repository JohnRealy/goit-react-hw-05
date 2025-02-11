import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import s from "./MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);
  if (!movie) return <p>Loader...</p>;
  return (
    <section>
      <Link>Go back</Link>
      <div className={s.container}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={s.info}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <nav className={s.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : "")}
            to="cast"
          >
            Cast
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : "")}
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
