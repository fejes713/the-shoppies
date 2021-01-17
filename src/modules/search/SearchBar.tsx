import React, { useEffect, useState, useContext } from "react";

import { NomineesContext } from "../contexts/nominees";
import { InputWrapper, SearchIcon, Input } from "./SearchBar.styled";

import useDebounce from "./utils/useDebounce";

const OMDB_KEY = "b721eead";

const SearchBar = () => {
  const { setSearchedNominees, setTotalSearchedNominees } = useContext(
    NomineesContext
  );

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!searchTerm) return; // prevent API call on 1st render
    const type = "movie";

    fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_KEY}&type=${type}&s=${searchTerm}`
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchedNominees(response.Search);
        setTotalSearchedNominees(Number(response.totalResults));
      });
    // eslint-disable-next-line
  }, [debouncedSearchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
  };

  return (
    <InputWrapper>
      <SearchIcon />
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search movies by title..."
      />
    </InputWrapper>
  );
};

export default SearchBar;
