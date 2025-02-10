import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useState, useEffect } from "react";

export default function App() {
  const [moviesToday, setMoviesToday] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const data = await api().then(console.log(data).catch(console.log));
      setMoviesToday(data);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<HomePage movies={moviesToday} />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route path=":movieId"></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
