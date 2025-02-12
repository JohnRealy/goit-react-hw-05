import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink className={({ isActive }) => (isActive ? s.active : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : "")}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
