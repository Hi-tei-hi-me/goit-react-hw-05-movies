import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import * as API from 'data/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Return } from 'utils/Return/Return';
import { Loader } from 'utils/Loader/Loader';
import { Error } from 'utils/Error/Error';

export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const film = await API.getMovieDetails(movieId);
        setMovie(film);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);
  const ReturnHref = location.state?.from ?? '/';
  return (
    <main>
      <Return to={ReturnHref}>Go back</Return>
      {isLoading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      {error && <Error />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Return to={ReturnHref}>Go back</Return>
    </main>
  );
}
