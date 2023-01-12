import { useState } from 'react';
import { SearchForm, SearchBtn, SearchBtnLabel, SearchFormInput } from './Searchbar.styled';
import { showToast } from 'utils/Toasts/toaster';

export const Searchbar = ({ onSubmit }) => {
  const [textQuery, setTextQuery] = useState('');
  const reset = () => {
    setTextQuery('');
  };
  const handleChange = evt => {
    const { value } = evt.target;
    setTextQuery(value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (textQuery.trim().toLowerCase() === '') {
      return showToast('You should enter keyword if you want to find something', 'incorrectQuery');
    }
    onSubmit(textQuery);
    reset();
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoFocus
        autocomplete="off"
        placeholder="Looking for..."
        value={textQuery}
        onChange={handleChange}
      />
      <SearchBtn type="submit">
        <SearchBtnLabel>Search</SearchBtnLabel>
      </SearchBtn>
    </SearchForm>
  );
};
