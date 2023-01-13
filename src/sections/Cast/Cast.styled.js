import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
    object-fit: cover;
  }
  & div {
    width: 180px;
  }
`;
