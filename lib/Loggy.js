const Character = require('./Character.js');

class Loggy extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height)
  }

  move(x) {
    super.move(x)
  }
}

module.exports = Loggy;