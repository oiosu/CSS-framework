import React from "react";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";

import { BiArrowBack } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";

const NavigationBar = () => {
  // 로직_if (돋보기 버튼 누른 상태 true && innerWidth <= 640px) { }
  const specialSearchBarMarkup = (
    <div className="special_searchbar">
      <button>
        <BiArrowBack size={25} />
      </button>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="false"
        />
        <button type="submit">
          <ImSearch size={20} data-tip="Search" data-for="navbar" />
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} data-tip="Search with your voice" />
      </button>
    </div>
  );
  return (
    <nav className="Navbar">
      {width <= 640 && 돋보기 버튼을 누른상태 true ? 
        specialSearchBarMarkup
        : 
        <>
          <LeftNav />
          <SearchBar />
          <RightNav />
        </>
      }
    </nav>
  );
};

export default NavigationBar;
