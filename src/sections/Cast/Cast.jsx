import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'data/api';
import { Loader } from 'utils/Loader/Loader';
import { showToast } from 'utils/Toasts/toaster';
import { Error } from 'utils/Error/Error';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchActors = async () => {
      try {
        setIsLoading(true);
        const actors = await API.getMovieCredits(movieId);
        setCast(actors);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActors();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 && (
        <ul>
          {cast.map(({ profile_path: profilePath, name, character }) => (
            <li key={name}>
              <p>{name}</p>
              <img
                src={profilePath !== null ? `https://image.tmdb.org/t/p/w500/${profilePath}` : ''}
                alt={name}
                width="70"
                height="100"
              />
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && showToast(`Sorry, we couldn't find any info`, 'nothingFound')}
      {error && <Error />}
    </>
  );
}
