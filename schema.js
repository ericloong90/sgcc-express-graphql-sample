const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numTimes: Int!): [Int]!
  }

  type Query {
    hello: String!
    ip: String!
    rollOneDice(numSides: Int!): Int!
    rollOneSixSidedDice: Int!
    rollDice(numSides: Int, numDice: Int!): [Int]!
    getDie(numSides: Int): RandomDie!
  }

  type Mutation {
    mutateTest: String!
  }
`);
