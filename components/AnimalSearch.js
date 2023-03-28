import { useState } from "react";

export default function AnimalSearch({ onSearch }) {
  const [searchSpecies, setSearchSpecies] = useState("");

  const handleSearchChange = (event) => {
    setSearchSpecies(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <label htmlFor="searchSpecies"></label>
      <input
        placeholder="filter by species"
        type="text"
        id="searchSpecies"
        value={searchSpecies}
        onChange={handleSearchChange}
      />
    </div>
  );
}
