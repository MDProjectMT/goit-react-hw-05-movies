import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const axiosReviewsData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2e6e040c77128d6262e889fe3f6426db`
        );
        setReviews(res.data.results);
      } catch (error) {
        console.error("Error", error);
      }
    };

    axiosReviewsData();
  }, [movieId]);

  if (reviews.length > 0) {
    return (
      <div>
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>We don't have any reviews for this movie</div>;
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
