/** @format */
import React, { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_MAP_INFO, FETCH_CITIES_QUERY } from "../server/Data/RentQueries";

function Board() {
  const {
    loading: cacheLoading,
    error: cacheError,
    data: cacheData,
  } = useQuery(GET_MAP_INFO);

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cacheData.mapInfoVar },
  });

  if (loading) return <p>loading ...</p>;
  if (cacheLoading) return <p>loading ...</p>;

  return (
    <div className="board">
      <h1>Board</h1>
      {/* {cacheData &&
        getCityName({ variables: { cityName: cacheData.mapInfoVar } })} */}
      {/* <h1>{cities}</h1> */}
      {/* {data && console.log(cityName)}
      {data &&
        data.cities.map((city) => {
          return (
            <div>
              <h1>{city.name}</h1>
            </div>
          );
        })} */}
      {data && console.log(data)}
    </div>
  );
}

export default Board;
