import PropTypes from 'prop-types';
import { ListedFilm } from 'components/ListedFilm/ListedFilm';
import { ListOfFilms } from './FilmsList.styled';

export const FilmsList = ({ films }) => {
  return (
    <ListOfFilms>
      {films.map(({ id, title }) => {
        return <ListedFilm key={id} id={id} title={title} />;
      })}
    </ListOfFilms>
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
