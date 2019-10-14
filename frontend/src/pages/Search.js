import React from "react";
import "./Search.css"

const Search = () => {
  return (
    <div className="container">
      <form action="" className="search">
        <div className="input_search">
          <div className="search_icon">
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            name="repo"
            id="repo"
            placeholder="Search repositorie"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
