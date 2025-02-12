import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";
import s from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    async function fetchReview() {
      try {
        const { data } = await fetchMovieReviews(movieId);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);
  return review.length === 0 ? (
    <p>There are no reviews for this movie</p>
  ) : (
    <ul className={s.list}>
      {review.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
