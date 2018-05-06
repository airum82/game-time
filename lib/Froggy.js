const Character = require('./Character.js');

class Froggy extends Character {
  constructor(img, x, y, width, height, velocity) {
    super(img, x, y, width, height, velocity);
    this.lives = 5;
    this.score = 0;
  }
  move() {
    super.move(x, y);
  }

  draw(context) {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  death() {
    this.y = 400;
    this.lives = this.lives - 1;
    if(this.lives < 0) {
      this.lives = 0;
    }
  }

  scorePoint() {
    this.score += 1;
  }
}

module.exports = Froggy;