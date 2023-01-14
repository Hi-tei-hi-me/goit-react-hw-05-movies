import PropTypes from 'prop-types';
import { BackLink } from './Return.styled';
import { IoArrowUndoSharp } from 'react-icons/io5';

export const Return = ({ to, children }) => {
  return (
    <BackLink to={to}>
      <IoArrowUndoSharp size={25} />
      {children}
    </BackLink>
  );
};

Return.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};
