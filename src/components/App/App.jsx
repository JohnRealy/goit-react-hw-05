import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import s from "./App.module.css";
import Header from "../Header/Header";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import HomePage from "../../pages/HomePage/HomePage";
// import MoviesPage from "../../pages/MoviesPage/MoviesPage";
// import MoviesDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieList from "../MovieList/MovieList";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieList = lazy(() => import("../MovieList/MovieList"));

export default function App() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieList />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
