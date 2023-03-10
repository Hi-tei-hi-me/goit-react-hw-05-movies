import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'utils/api';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loader } from 'components/reusable/Loader/Loader';
import { Error } from 'components/reusable/Error/Error';

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTending = async () => {
      try {
        setIsLoading(true);
        const films = await API.getTrendingFilms();
        setMoviesList(films);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTending();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {moviesList.length > 0 && <FilmsList films={moviesList} />}
      {error && <Error />}
    </main>
  );
}
