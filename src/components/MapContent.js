/** @format */

/*global kakao*/
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MAP_INFO } from "../server/Data/RentQueries";

const MapContent = () => {
  const { loading, error, data } = useQuery(GET_MAP_INFO);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="map-box">
      <h1>{data.mapInfoVar}</h1>
      <div id="map" style={{ flex: "1", height: "100%" }}></div>
    </div>
  );
};

export default MapContent;
