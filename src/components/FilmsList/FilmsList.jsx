import PropTypes from 'prop-types';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { ListOfFilms } from './FilmsList.styled';
import { ListedFilm } from 'components/ListedFilm/ListedFilm';

export const FilmsList = ({ films }) => {
  return (
    <ListOfFilms>
      {films.map(({ id, title }) => {
        return <ListedFilm key={id} id={id} title={title} />;
      })}
      <BsFillSuitHeartFill size={25} />
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
