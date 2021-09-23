/** @format */

import { React, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const FETCH_CITIES_QUERY = gql`
  query cities($cityName: String!) {
    cities(name: $cityName) {
      id
      places {
        name
        pos
      }
    }
  }
`;

function Rent() {
  const [cityName, setCityName] = useState("강남");

  const { loading, error, data } = useQuery(FETCH_CITIES_QUERY, {
    variables: { cityName: cityName },
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>this is Rent page</h1>
    </div>
  );
}

export default Rent;
