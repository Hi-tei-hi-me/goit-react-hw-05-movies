import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'data/api';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'utils/Error/Error';

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
      <h1>Films trending today</h1>
      {isLoading && <Loader />}
      {moviesList.length > 0 && <FilmsList films={moviesList} />}
      {error && <Error />}
    </main>
  );
}
