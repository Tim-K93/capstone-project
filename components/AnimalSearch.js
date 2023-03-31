import { useState } from "react";
import styled from "styled-components";

export default function AnimalSearch({ onSearch }) {
  const [searchSpecies, setSearchSpecies] = useState("");

  const handleSearchChange = (event) => {
    setSearchSpecies(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchFilter>
      <label htmlFor="searchSpecies" aria-label="searchSpecies"></label>
      <input
        placeholder="filter by species"
        type="text"
        id="searchSpecies"
        value={searchSpecies}
        onChange={handleSearchChange}
      />
    </SearchFilter>
  );
}

const SearchFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4px;
  input::placeholder {
    text-align: center;
  }
  input {
    width: 110px;
  }
`;
