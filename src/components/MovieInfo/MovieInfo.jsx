import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, MovieContainer } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const { title, overview, poster_path, vote_average, genres, release_date } = movie;
  const releaseDate = release_date.slice(0, 4);
  const posterPath = poster_path !== null ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '';
  const voteAverage = vote_average.toFixed(0) * 10;
  const genresList =
    genres.length > 0 ? genres.map(({ name }) => name).join(', ') : 'No information';
  const ReturnHref = location.state?.from ?? '/';

  return (
    <>
      <Container>
        <MovieContainer>
          <img src={posterPath} alt={title} width="500" height="700" />
        </MovieContainer>
        <div>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>
            User Score: <span>{voteAverage}%</span>{' '}
          </p>
          <b>Overview:</b>
          <p>{overview}</p>
          <b>Genres:</b>
          <p>{genresList}</p>
        </div>
      </Container>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: ReturnHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: ReturnHref }}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.exact({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
