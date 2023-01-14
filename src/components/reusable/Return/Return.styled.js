import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
