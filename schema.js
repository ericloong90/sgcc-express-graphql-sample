const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    hello: String!
    ip: String!
    rollOneDice(numSides: Int!): Int!
    rollOneSixSidedDice: Int!
    rollDice(numSides: Int, numDice: Int!): [Int]!
  }

  type Mutation {
    mutateTest: String!
  }
`);
