/** @format */

/*global kakao*/
import React, { useEffect, useState, useCallback } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

import MapTypeData from "./Map/MapTypeData";
import CityResult from "./Rent/CityResult";
import PlaceResult from "./Rent/PlaceResult";

const MapSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [cityName, setCityName] = useState();

  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(searchText);
    setSearchText("");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-bar">
      <div className="logo-box">
        <p className="service-name">낫유포맵</p>
        <div className="around-box">
          <p>내 주변 위치 검색</p>
          <RiIcons.RiFocus3Line />
        </div>
      </div>
      <div className="search-box">
        <div className="search-area">
          <input
            className="search-input"
            type="text"
            placeholder="지역명을 입력해주세요."
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyPress={handleKeypress}
            value={searchText}
          />
          <button className="search-btn" type="submit" onClick={handleSubmit}>
            <AiIcons.AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="search-result-box">
        {/* <PlaceResult /> */}
        <CityResult cityName={cityName} />
        {/* <MapTypeData /> */}
      </div>
      <div className="search-register-box">
        <span>신규장소 등록</span>
      </div>
    </div>
  );
};

export default MapSearch;
