const runTime = require('./runTime');

module.exports = ({
  context: { startTime },
  variables,
  document,
  operationName,
  result,
}) => {
  console.log('variables: ', variables);

  return {
    runTime: runTime(startTime),
  };
};
