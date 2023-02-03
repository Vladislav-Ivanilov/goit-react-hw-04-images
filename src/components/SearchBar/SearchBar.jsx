import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarBox,
  SearchForm,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchQueryChange = element => {
    setQuery(element.currentTarget.value.toLowerCase());
  };

  const handelSubmit = element => {
    element.preventDefault();

    if (query.trim() === '') {
      return toast.error('Please enter a search value');
    }

    onSubmit(query);
  };

  return (
    <SearchBarBox>
      <SearchForm onSubmit={handelSubmit}>
        <SearchButton type="submit">
          <AiOutlineSearch size="2rem" />
        </SearchButton>

        <SearchInput
          value={query}
          onChange={handleSearchQueryChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
      <ToastContainer autoClose={false} draggable={false} />
    </SearchBarBox>
  );
};
