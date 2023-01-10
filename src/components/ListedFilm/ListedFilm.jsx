import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Link } from './ListedFilm.styled';

export const ListedFilm = ({ id, title }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </Item>
  );
};

ListedFilm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
