import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'utils/api';
import { ActorsList, ActorInfo } from './Cast.styled';
import { Loader } from 'components/reusable/Loader/Loader';
import { showToast } from 'components/reusable/Toasts/toaster';
import { Error } from 'components/reusable/Error/Error';
import defaultIMG from 'assets/defaultIMG.png';

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
        if (!actors.length) {
          return showToast(`Sorry, we couldn't find anything about actors cast`, 'noCastInfo');
        }
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
        <ActorsList>
          {cast.map(({ profile_path: profilePath, name, character }) => (
            <ActorInfo key={name}>
              <img
                src={profilePath ? `https://image.tmdb.org/t/p/w500/${profilePath}` : defaultIMG}
                alt="Oops!"
              />
              <div>
                <p>{name}</p>
                <p>
                  Character:
                  <br />
                  {character ? character : 'No information'}
                </p>
              </div>
            </ActorInfo>
          ))}
        </ActorsList>
      )}
      {error && <Error />}
    </>
  );
}
