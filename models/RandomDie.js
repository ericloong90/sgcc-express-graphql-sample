class RandomDie {
  constructor({ numSides }) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({ numTimes }) {
    const output = [];

    for (let i = 0; i < numTimes; i += 1) {
      output.push(1 + Math.floor(Math.random() * this.numSides));
    }

    return output;
  }
}

module.exports = RandomDie;
