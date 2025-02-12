import { useLocation, Link } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </>
  );
}
