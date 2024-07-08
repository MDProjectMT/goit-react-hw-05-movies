import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./SearchMovies.module.scss";

export default function Movies() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2e6e040c77128d6262e889fe3f6426db&query=${inputValue}`
      );
      setSearchResult(res.data.results);
    } catch {
      console.error("ERROR", error);
    }
  };

  return (
    <div className={styles.div}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search movie"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <ul>
        {searchResults.map((searchMovie) => {
          return (
            <li key={searchMovie.id}>
              <Link to={`/goit-react-hw-05-movies/movies/${searchMovie.id}`}>
                {searchMovie.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
