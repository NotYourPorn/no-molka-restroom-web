/** @format */

/*global kakao*/
import React, { useEffect } from "react";

const MapContent = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="map-box">
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default MapContent;
