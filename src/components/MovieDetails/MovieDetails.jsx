import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetails.module.scss";
import PropTypes from "prop-types";

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
              <Link to={`cast`}>
                <button type="button">CAST</button>
              </Link>
            </div>
            <div className={styles.button}>
              <Link to={`reviews`}>
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

MovieDetails.propTypes = {
  movieId: PropTypes.string,
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieDetails;
