import s from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage({ movies }) {
  const moviesMock = [
    {
      id: 1,
      title: "Dune: Part Two",
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
      release_date: "2024-03-01",
      vote_average: 8.5,
      poster_path:
        "https://image.tmdb.org/t/p/w500/8EIQAv3sthrxpJYS0jG4qAgxXzj.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    },
    {
      id: 2,
      title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      release_date: "2023-07-21",
      vote_average: 9.0,
      poster_path:
        "https://image.tmdb.org/t/p/w500/8fFJVgkyA6wybOY0a3uD0k6z86A.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/n9HEnrBHdhb6OtKcNEJLKcQj9Wk.jpg",
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse.",
      release_date: "2023-06-02",
      vote_average: 8.7,
      poster_path:
        "https://image.tmdb.org/t/p/w500/5YtXsLG9ncjjFyGZjoeV31CGf01.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/uAiEuvcmC8bDUPv75cCeFsXvSfQ.jpg",
    },
    {
      id: 4,
      title: "The Batman",
      overview:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.",
      release_date: "2022-03-04",
      vote_average: 7.9,
      poster_path:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/ryr532vaWCmStSmtBxy9aUMT0Yc.jpg",
    },
    {
      id: 5,
      title: "Avatar: The Way of Water",
      overview:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
      release_date: "2022-12-16",
      vote_average: 7.6,
      poster_path:
        "https://image.tmdb.org/t/p/w500/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/w1280/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
    },
  ];
  return (
    <div className={s.container}>
      <h2>Trending today</h2>
      <ul className={s.list}>
        {moviesMock.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
