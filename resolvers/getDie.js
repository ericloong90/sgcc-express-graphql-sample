const RandomDie = require('../models/RandomDie');

module.exports = ({ numSides }) => new RandomDie({ numSides: numSides || 6 });
