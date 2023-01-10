import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'data/api';
import { Loader } from 'components/Loader/Loader';
import { showToast } from 'utils/Toasts/toaster';
import { Error } from 'utils/Error/Error';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await API.getMovieReviews(movieId);
        setReviews(response);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && showToast(`Sorry, we couldn't find any info`, 'nothingFound')}
      {error && <Error />}
    </>
  );
};
