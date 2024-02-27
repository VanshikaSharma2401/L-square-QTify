import React from "react";
import styles from "../../src/styles.module.css"
import searchIcon from "../assets/SearchIcon.svg"

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search a song of your choice"
      />
      <img src={searchIcon} alt="search icon"/>
    </div>
  );
};
export default Search;
