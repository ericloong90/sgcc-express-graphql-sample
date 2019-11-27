module.exports = ({ numSides, numDice }) => {
  const output = [];

  for (let i = 0; i < numDice; i += 1) {
    output.push(1 + Math.floor(Math.random() * (numSides || 6)));
  }

  return output;
};
