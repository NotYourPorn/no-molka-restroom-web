const { gql } = require('apollo-server');

module.exports = gql`
    type Rent{
        id : ID!
        rent_city: String!
        rent_item: String!
        rent_method : String!
        rent_period : String!
        rent_condition : [String]!
    }

    type RentDetail{
        city_id : ID!
        name : String!
        phone : String!
        address : String!
        coordinate : [String]!
    }
`