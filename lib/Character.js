class Character {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

module.exports = Character;