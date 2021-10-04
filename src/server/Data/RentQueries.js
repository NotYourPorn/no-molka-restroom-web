/** @format */

import { gql } from "@apollo/client";

export const FETCH_CITIES_QUERY = gql`
  query cities($cityName: String!) {
    cities(name: $cityName) {
      id
      name
      condition
      places {
        cityId
        name
        address
        phone
        pos
      }
    }
  }
`;

export const FETCH_PLACES_QUERY = gql`
  query getPlaces($cityId: String!) {
    places(cityId: $cityId) {
      cityId
      name
      phone
      address
      pos
      cities {
        id
        item
        condition
        method
        period
      }
    }
  }
`;

export const GET_MAP_INFO = gql`
  query getMapInfo {
    mapInfoVar @client
  }
`;
