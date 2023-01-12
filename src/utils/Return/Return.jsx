import PropTypes from 'prop-types';
import { BackLink } from './Return.styled';
import { GiReturnArrow } from 'react-icons/gi';

export const Return = ({ to, children }) => {
  return (
    <BackLink to={to}>
      <GiReturnArrow size={20} />
      {children}
    </BackLink>
  );
};

Return.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
