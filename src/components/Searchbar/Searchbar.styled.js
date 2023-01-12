import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SearchFormInput = styled.input`
  padding: 10px 15px;
  margin-right: 10px;
  border: 2px solid lightgray;
  border-radius: 8px;
  &::placeholder {
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: lightgray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border: 2px solid rgb(149, 20, 25, 0.3);
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: white;
    background-color: #b3060d;
  }
`;

export const SearchBtnLabel = styled.span``;
