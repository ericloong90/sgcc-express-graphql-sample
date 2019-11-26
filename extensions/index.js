const runTime = require('./runTime');

module.exports = ({ context: { startTime } }) => ({
  runTime: runTime(startTime),
});
