const runTime = require('./runTime');

module.exports = ({
  context: { startTime },
  // variables,
  // document,
  // operationName,
  // result,
}) => ({
  runTime: runTime(startTime),
});
