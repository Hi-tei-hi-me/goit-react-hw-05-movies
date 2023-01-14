import { ErrorMsg } from './Error.styled';
import errorIMG from 'assets/errorIMG.png';

export const Error = ({ textError }) => {
  return (
    <ErrorMsg>
      <img src={errorIMG} alt="error" width={100} />
      Oops! Something's wrong:
      <br />❌ {textError}
      <br />
      Please, refresh this page or try again later
    </ErrorMsg>
  );
};
