var Character = require('./Character.js');

class Car extends Character {
  constructor(img, x, y, width, height, velocity) {
    super(img, x, y, width, height, velocity)
  }

  move() {
    this.x = this.x - this.velocity;
  }
}

module.exports = Car;