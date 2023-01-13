import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'data/api';
import { ActorsList, ActorInfo } from './Cast.styled';
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
        if (!actors.length) {
          return showToast(`Sorry, we couldn't find any info`, 'noInfo');
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
                src={
                  profilePath !== null
                    ? `https://image.tmdb.org/t/p/w500/${profilePath}`
                    : 'assets/defaultIMG.png'
                }
                alt="Oops!"
              />
              <div>
                <p>{name}</p>
                <p>
                  Character:
                  <br />
                  {character}
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
