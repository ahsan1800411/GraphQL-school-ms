const { ApolloServer } = require('apollo-server');
const { db } = require('./db');
const { Mutation } = require('./resolvers/Mutation');
const { Query } = require('./resolvers/Query');
const { Student } = require('./resolvers/Student');
const { Teacher } = require('./resolvers/Teacher');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Student,
    Teacher,
    Mutation,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`Running on ${url}🖤`);
});
