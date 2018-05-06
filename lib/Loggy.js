const Character = require('./Character.js');

class Loggy extends Character {
  constructor(img, x, y, width, height, velocity) {
    super(img, x, y, width, height, velocity)
  }

  move() {
    this.x = this.x + this.velocity;
  }

  animate(context, color) {
    super.animate(context, color);
  }
}

module.exports = Loggy;