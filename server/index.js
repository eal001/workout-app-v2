const {ApolloServer, gql} = require('apollo-server');
require("dotenv").config()
const port = process.env.APOLLO_PORT;
const typeDefs = require("./schemas/schema.apollo.js");
const resolvers = require("./resolvers/resolvers.apollo.js");

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: port}).then( ({url}) => {
    console.log(`server initialized at ${url}`);
})