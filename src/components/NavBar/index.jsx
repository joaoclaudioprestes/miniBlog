import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.title}>
        Mini <span className={styles.blog}>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Sobre
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
