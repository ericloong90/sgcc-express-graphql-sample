const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const session = require('express-session');

const schema = require('./schema');
const resolvers = require('./resolvers');
const mutations = require('./mutations');
const extensions = require('./extensions');

const app = express();
app.use(cors());
app.use(
  session({
    secret: 'SG Code Campus',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }),
);

app.get('/', (req, res) => {
  res.json({
    message: 'Navigate to /graphql for GraphQL endpoint',
  });
});

const startTime = Date.now();

app.use(
  '/graphql',
  graphqlHTTP((request, response, graphQLParams) => ({
    schema,
    rootValue: {
      ...mutations,
      ...resolvers,
    },
    graphiql: {
      defaultQuery: `
      query HelloWorld {
        hello
      }
      `,
    },
    context: {
      startTime,
      request,
      response,
      graphQLParams,
    },
    extensions,
  })),
);

app.listen(process.env.PORT || 4000, () => {
  console.log(`App is now listening to port ${process.env.port || 4000}`);
});
