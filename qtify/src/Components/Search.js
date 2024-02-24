import React from "react";

import logo from "../assets/SearchIcon.svg"

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search a album of your choice"
      />
      <img src={logo} alt="qtify logo"/>
    </div>
  );
};
export default Search;
