import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
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
