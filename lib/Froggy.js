const Character = require('./Character.js');

class Froggy extends Character {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  move(x, y) {
    super.move(x, y);
  }
}

module.exports = Froggy;