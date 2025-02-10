import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route path=":movieId"></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
