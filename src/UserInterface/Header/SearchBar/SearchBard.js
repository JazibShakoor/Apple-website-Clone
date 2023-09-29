import React from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";

export default function SearchBard() {
  return (
    <div className="searchBar">
      <BsSearch></BsSearch>
      <input
        autoFocus
        type="search"
        name="search"
        id="search"
        placeholder="Search Apple.Com"
      />
    </div>
  );
}
