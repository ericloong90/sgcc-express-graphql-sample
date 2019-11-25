const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootValue = {
  hello: () => 'Hello World',
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
