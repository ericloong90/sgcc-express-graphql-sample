module.exports = function rollOneDice({ numSides }) {
  return this.rollDice({ numSides, numDice: 1 })[0];
};
