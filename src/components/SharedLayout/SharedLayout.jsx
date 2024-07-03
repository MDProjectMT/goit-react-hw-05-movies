import { Outlet, Link } from "react-router-dom";
import styles from "./SharedLayout.module.scss";
export const SharedLayout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/movies" className={styles.link}>
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
