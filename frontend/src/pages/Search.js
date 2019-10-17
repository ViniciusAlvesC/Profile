import React from "react";
import { Container, SearchBar, SearchInput, MyButton } from "./Styles";

const Search = () => {
  return (
    <Container>
      <SearchBar>
        <SearchInput>
          <input
            type="text"
            name="repo"
            id="repo"
            placeholder="Search repositorie"
          />
          <MyButton type="submit">
            <i className="fas fa-search"></i>
          </MyButton>
        </SearchInput>
      </SearchBar>
    </Container>
  );
};

export default Search;
