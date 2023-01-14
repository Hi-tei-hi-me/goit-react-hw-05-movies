import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'utils/api';
import { ListOfReviews, Review } from './Reviews.styled';
import { Loader } from 'components/reusable/Loader/Loader';
import { showToast } from 'components/reusable/Toasts/toaster';
import { Error } from 'components/reusable/Error/Error';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await API.getMovieReviews(movieId);
        if (!reviews.length) {
          return showToast(
            `No one has left a review yet. If you want, yours can be first`,
            'noReviews'
          );
        }
        setReviews(reviews);
        showToast(`Here's what people say about this film`, 'reviewsFound');
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
        <ListOfReviews>
          {reviews.map(({ author, content }) => (
            <Review key={author}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </Review>
          ))}
        </ListOfReviews>
      )}
      {error && <Error />}
    </>
  );
}
