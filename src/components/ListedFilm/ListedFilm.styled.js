import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4);
  &:hover a,
  &:focus a {
    text-shadow: 1px 1px 3px #950606;
  }
`;

export const Link = styled(NavLink)`
  text-transform: uppercase;
`;
