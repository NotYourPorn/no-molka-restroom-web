/** @format */
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CITIES_QUERY } from "../../server/Data/RentQueries";
import PlaceResult from "../Rent/PlaceResult";

const conditionCheck = (condition) => {
  if (condition.includes("C")) {
    return <li>관리자, 일반 시민 대상</li>;
  } else {
    return <li>건물 / 시설물 관리자, 소유자 대상</li>;
  }
};

const CityResult = (props) => {
  const [placeId, setPlaceId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const cityName = props.cityName;

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cityName },
  });

  const showPlaceInfo = (placeId, e) => {
    e.preventDefault();
    setPlaceId(placeId);
    setIsOpen((isOpen) => !isOpen);
    console.log(placeId);
  };

  return (
    <div>
      {loading && "loading"}
      {error && "There is an error"}
      {data &&
        data.cities.map((city) => {
          return (
            <div className="city-box">
              <div className="city-info-box" key={city.id}>
                <li className="city-name">{city.name}</li>
                <li className="city-count">{city.places.length}곳</li>
              </div>
              {city.places.map((place) => {
                return (
                  <div
                    className="place-box"
                    key={place.id}
                    onClick={(e) => {
                      showPlaceInfo(place.id, e);
                    }}
                  >
                    <li className="place-name">{place.name}</li>
                    {/* <PlaceResult className="place-indiv" cityId = {placeId}/> */}
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
