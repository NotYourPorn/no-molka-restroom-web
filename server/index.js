const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const GraphQLJSON = require('graphql-type-json');

const {MONGODB} = require('./config.js')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    JSON : GraphQLJSON
})

server.listen().then()