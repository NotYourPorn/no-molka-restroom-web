/** @format */

/*global kakao*/
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MAP_INFO, FETCH_CITIES_QUERY } from "../server/Data/RentQueries";

const trimPos = (pos) => {
  const tempPos = pos.replaceAll("'", "");
  return pos.slice(1, tempPos.length - 1).split(", ");
};

const MapContent = () => {
  const {
    loading: cacheLoading,
    error: cacheError,
    data: cacheData,
  } = useQuery(GET_MAP_INFO);

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cacheData.mapInfoVar },
  });

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    function displayMarker(city, placePos, place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(placePos[0], placePos[1]),
        title: place.name,
      });
    }

    if (loading) {
      console.log("this is loading");
    }
    if (data) {
      console.log("this is data");

      data.cities.map((city) => {
        return city.places.map((place) => {
          return <>{displayMarker(city, trimPos(place.pos[0]), place)}</>;
        });
      });
    }
  });

  return (
    <div className="map-box">
      <div id="map" style={{ flex: "1", height: "100%" }}></div>
    </div>
  );
};

export default MapContent;
