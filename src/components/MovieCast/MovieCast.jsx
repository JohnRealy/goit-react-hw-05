import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api";
import s from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function fetchCast() {
      try {
        const { data } = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }),
    [movieId];
  return cast.length === 0 ? (
    <p>There is no cast for this movie</p>
  ) : (
    <ul className={s.list}>
      {cast.map((cast) => (
        <li key={cast.id}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
