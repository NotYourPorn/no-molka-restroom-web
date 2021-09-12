const { gql } = require('apollo-server');

module.exports = gql`
  type City {
    id: ID!
    name : String!
    item : String!
    method : String!
    condition : String!
    period : String!
    places : [Place]!
  }

  type Place {
    id : ID!
    cityId : String!
    name : String!
    phone : String!
    address : String!
    pos : [String]!
    cities : [City]!
  }

  type Query {
    cities(name : String!) : [City]!
    places(cityId : String!) : [Place]
  }
`;