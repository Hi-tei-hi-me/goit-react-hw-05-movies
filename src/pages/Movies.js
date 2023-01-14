import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'utils/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loader } from 'components/reusable/Loader/Loader';
import { showToast } from 'components/reusable/Toasts/toaster';
import { Error } from 'components/reusable/Error/Error';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const textQuery = searchParams.get('query') ?? '';
  useEffect(() => {
    if (!textQuery) {
      return;
    }
    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        const films = await API.getMovieByTextQuery(textQuery);
        setMoviesList(films);
        if (!films.length) {
          return showToast(`Sorry, we couldn't find anything upon your request`, 'nothingFound');
        }
        showToast(`Look, how many cool movies we found for you!`, 'filmsFound');
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilms();
  }, [searchParams, textQuery]);
  const onSubmit = query => {
    if (query.trim().toLowerCase() === textQuery) {
      return showToast(
        `There is nothing new for you, but you can try to find some another film`,
        'repeatedQuery'
      );
    }
    setSearchParams({ query });
    setMoviesList([]);
  };
  return (
    <main>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {moviesList.length > 0 && <FilmsList films={moviesList} />}
      {error && <Error />}
    </main>
  );
}
