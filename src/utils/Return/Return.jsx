import PropTypes from 'prop-types';
import { BackLink } from './Return.styled';

export const Return = ({ to, children }) => {
  return (
    <BackLink to={to}>
      Back
      {children}
    </BackLink>
  );
};

Return.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
