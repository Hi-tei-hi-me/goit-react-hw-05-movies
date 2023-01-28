import { ErrorMsg } from './WrongPage.styled';
import errorIMG from 'assets/errorIMG.png';

export const WrongPage = ({ textError }) => {
  return (
    <ErrorMsg>
      <img src={errorIMG} alt="error" width={100} />
      You are looking for unexisting page!
      <br />
      ❌
      <br />
      That's cool, but please try anything else.
    </ErrorMsg>
  );
};
