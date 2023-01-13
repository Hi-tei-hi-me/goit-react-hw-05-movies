import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid lightgray;
  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const PosterContainer = styled.div`
  width: 400px;
  max-width: 30vw;
  flex-shrink: 0;
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const AddInfoOption = styled.li`
  padding: 5px 0px;
  color: #9c0309;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
