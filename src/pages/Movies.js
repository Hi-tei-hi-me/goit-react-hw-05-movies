import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'data/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loader } from 'components/Loader/Loader';
import { showToast } from 'utils/Toasts/toaster';
import { Error } from 'utils/Error/Error';

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
        if (!films.data.length) {
          return showToast(`Sorry, we couldn't find any ${textQuery}`, 'nothingFound');
        }
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
    const normalizedQuery = query.searchQuery.trim().toLowerCase();
    setSearchParams(normalizedQuery !== '' ? { normalizedQuery } : {});
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
