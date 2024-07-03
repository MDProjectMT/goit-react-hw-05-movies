import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Cast.module.scss";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const axiosCastData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2e6e040c77128d6262e889fe3f6426db`
        );
        console.log(res.data);
        setCast(res.data.cast);
      } catch (error) {
        console.error("Error", error);
      }
    };
    axiosCastData();
  }, [movieId]);

  return (
    <div className={styles.ul}>
      {cast.map((item) => {
        return (
          <div key={item.id} className={styles.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width={"100px"}
              height={"150px"}
            />
            <div className={styles.name}>
              <p>
                <b>{item.name}</b>
              </p>
              <p>
                Character: <b>{item.character}</b>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
