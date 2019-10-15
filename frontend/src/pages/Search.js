import React from "react";
import { Container, SearchBar, SearchInput, SearchIcon } from "./Styles";

const Search = () => {
  return (
    <Container>
      <SearchBar>
        <SearchInput>
          <SearchIcon>
            <i className="fas fa-search"></i>
          </SearchIcon>

          <input
            type="text"
            name="repo"
            id="repo"
            placeholder="Search repositorie"
          />
        </SearchInput>
      </SearchBar>
    </Container>
  );
};

export default Search;
