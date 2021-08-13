/** @format */
import React from "react";

import MapContent from "../components/MapContent";
import MapSearch from "../components/MapSearch";

import "../css/Map.css";

function Map() {
  return (
    <div className="map">
      <section style={{ flexDirection: "row" }}>
        <MapSearch />
        <MapContent />
      </section>
    </div>
  );
}

export default Map;
