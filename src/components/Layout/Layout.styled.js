import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 40px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  margin-right: -15px;
  margin-left: -15px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid gray;
  background: linear-gradient(to left, #bdc3c7, #2c3e50);
  color: white;
  & nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-transform: uppercase;
  }
`;

export const Link = styled(NavLink)`
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 4px;
  background-color: inherit;
  box-shadow: none;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  &.active {
    background-color: #9c0309;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
