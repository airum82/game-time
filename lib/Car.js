var Character = require('./Character.js');

class Car extends Character {
  constructor(x, y, width, height) {
    super(x, y, width, height)
  }

  move(x, y) {
    super.move(x, y);
  }
}

module.exports = Car;