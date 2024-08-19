import React from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from "../../../helpers/useWindowSize";

function SearchBar() {
  const { width } = useWindowSize();

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
  };

  const handleSearchClick = () => {
    // Handle search click for small screens
  };

  return (
    <div className={`SearchBar ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          <button type="submit">
            <ImSearch size={20} data-tip="search" data-for="navbar" />
          </button>
        </form>
      ) : (
        <button
          className="icon-container searchIcon"
          onClick={handleSearchClick}
        >
          <ImSearch size={20} data-tip="Search" data-for="navbar" />
        </button>
      )}
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice
          size={25}
          data-tip="Search with your voice"
          data-for="navbar"
        />
      </button>
    </div>
  );
}

export default SearchBar;
