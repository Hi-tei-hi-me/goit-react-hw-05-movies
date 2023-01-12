import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  text-shadow: none;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover a,
  &:focus a {
    text-shadow: 2px 2px 4px #950606;
  }
`;

export const Link = styled(NavLink)`
  text-transform: uppercase;
`;
