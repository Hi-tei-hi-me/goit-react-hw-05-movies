import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, PosterContainer, AddInfoList, AddInfoOption } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const { title, overview, poster_path, vote_average, genres, release_date } = movie;
  const releaseDate = release_date.slice(0, 4);
  const posterPath =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'assets/defaultIMG.png';
  const voteAverage = vote_average.toFixed(0) * 10;
  const genresList =
    genres.length > 0 ? genres.map(({ name }) => name).join(', ') : 'No information';
  const ReturnHref = location.state?.from ?? '/';
  return (
    <>
      <Container>
        <PosterContainer>
          <img src={posterPath} alt={title} />
        </PosterContainer>
        <div>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>
            User Score: <span>{voteAverage}%</span>
          </p>
          <span>
            <b>Overview:</b>
            <p>{overview}</p>
          </span>
          <span>
            <b>Genres:</b>
            <p>{genresList}</p>
          </span>
        </div>
      </Container>
      <h3>Additional information</h3>
      <AddInfoList>
        <AddInfoOption>
          <Link to="cast" state={{ from: ReturnHref }}>
            Cast
          </Link>
        </AddInfoOption>
        <AddInfoOption>
          <Link to="reviews" state={{ from: ReturnHref }}>
            Reviews
          </Link>
        </AddInfoOption>
      </AddInfoList>
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
