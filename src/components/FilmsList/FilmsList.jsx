import PropTypes from 'prop-types';
import { ListedFilm } from './FilmsList.styled';

export const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title }) => {
        return <ListedFilm key={id} id={id} title={title} />;
      })}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
