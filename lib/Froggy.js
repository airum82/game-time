const Character = require('./Character.js');

class Froggy extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
  }
  move(x, y) {
    super.move(x, y);
  }
}

module.exports = Froggy;