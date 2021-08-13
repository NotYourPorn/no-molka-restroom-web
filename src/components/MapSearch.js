/** @format */

/*global kakao*/
import React, { useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import MapTypeData from "./Map/MapTypeData";

const MapSearch = () => {
  return (
    <div className="search-box">
      <div className="logo-box">
        <p>낫유포맵</p>
        <div className="around-box">
          <FaIcons.FaMapMarkerAlt />
          <p>내 주변 위치 검색</p>
        </div>
      </div>
      <div className="search-area">
        <span className="search-icon">
          <AiIcons.AiOutlineSearch />
        </span>
        <input className="search-input"></input>
      </div>
      <div className="search-result-box">
        <MapTypeData />
      </div>
      <div className="search-register-box">
        <span>신규장소 등록</span>
      </div>
    </div>
  );
};

export default MapSearch;
