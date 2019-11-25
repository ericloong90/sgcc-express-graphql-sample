const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String!
    ip: String!
    rollOneDice(numSides: Int!): Int!
    rollOneSixSidedDice: Int!
    rollDice(numSides: Int, numDice: Int!): [Int]!
  }
`);

const rootValue = {
  hello: () => 'Hello World',
  ip: (args, req) => req.ip,
  rollOneDice: ({ numSides }) => Math.floor(Math.random() * numSides) + 1,
  rollOneSixSidedDice() {
    return this.rollOneDice({ numSides: 6 });
  },
  rollDice({ numSides = 6, numDice }) {
    const rolls = [];
    for (let i = 0; i < numDice; i += 1) {
      rolls.push(this.rollOneDice({ numSides }));
    }
    return rolls;
  },
};

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Navigate to /graphql for GraphQL endpoint',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
);

app.listen(process.env.PORT || 4000, () => {
  console.log(`App is now listening to port ${process.env.port || 4000} `);
});
