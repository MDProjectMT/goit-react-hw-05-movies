import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const axiosMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2e6e040c77128d6262e889fe3f6426db`
        );
        setMovie(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    axiosMovieData();
  }, [movieId]);

  return (
    <div>
      <Link to="/" className={styles.link}>
        <button type="submit">&#171; Go back</button>
      </Link>
      {movie !== null && (
        <div>
          <div className={styles.div}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.tagline}
              width={"300px"}
              height={"450px"}
            />
            <div>
              <h1>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>Additional information</h3>
            <div>
              <Link to={`/movies/${movieId}/cast`}>
                <button type="button">CAST</button>
              </Link>
            </div>
            <div className={styles.button}>
              <Link to={`/movies/${movieId}/reviews`}>
                <button type="button">REVIEWS</button>
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;