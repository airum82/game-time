const Character = require('./Character.js');

class Froggy extends Character {
  constructor(img, x, y, width, height, velocity) {
    super(img, x, y, width, height, velocity);
    this.lives = 5;
  }
  move() {
    super.move(x, y);
  }

  death() {
    this.y = 550;
    this.lives = this.lives - 1;
  }
}

module.exports = Froggy;