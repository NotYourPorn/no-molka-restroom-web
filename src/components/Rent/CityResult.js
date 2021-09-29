/** @format */
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CITIES_QUERY } from "../../server/Data/RentQueries";

const conditionCheck = (condition) => {
  if (condition.includes("C")) {
    return <li>관리자, 일반 시민 대상</li>;
  } else {
    return <li>건물 / 시설물 관리자, 소유자 대상</li>;
  }
};

const CityResult = (props) => {
  const cityName = props.cityName;

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cityName },
  });

  return (
    <div>
      {loading && "loading"}
      {error && "There is an error"}
      {data &&
        data.cities.map((city) => {
          return (
            <div className="city-box">
              <div className="city-info-box">
                <li className="city-name">{city.name}</li>
                <li className="city-count">{city.places.length}곳</li>
              </div>
              {city.places.map((place) => {
                return (
                  <div className="place-box">
                    <li className="place-name">{place.name}</li>
                    <div className="place-info-box">
                      <li>{place.address}</li>
                      {conditionCheck(city.condition)}
                      <li>{place.phone}</li>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default CityResult;
