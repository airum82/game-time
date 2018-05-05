const Character = require('./Character.js');

class Froggy extends Character {
  constructor(img, x, y, width, height, velocity) {
    super(img, x, y, width, height, velocity);
  }
  move() {
    super.move(x, y);
  }

  death() {
    this.y = 550;
  }
}

module.exports = Froggy;