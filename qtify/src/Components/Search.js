import React from "react";
const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search a album of your choice"
      />
      <img src="../../assets/SeachIcon.svg" alt="qtify logo"/>
    </div>
  );
};
export default Search;
