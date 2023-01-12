import { ErrorMsg } from './Error.styled';
import defaultIMG from '../../assets/defaultIMG.png';

export const Error = ({ textError }) => {
  return (
    <ErrorMsg>
      <img src={defaultIMG} alt="error" width={100} />
      Oops! Something's wrong:
      <br />❌ {textError}
      <br />
      Please, refresh this page or try again later
    </ErrorMsg>
  );
};
