import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

export const ActorInfo = styled.li`
  display: flex;
  gap: 8px;
  background-color: #facccc5e;
  border-radius: 5px;
  overflow: hidden;
  & img {
    flex-shrink: 0;
    width: 100px;
    height: 150px;
    object-fit: scale-down;
  }
  & div {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 180px;
    @media (max-width: 622px) {
      width: 95vw;
    }
  }
`;
