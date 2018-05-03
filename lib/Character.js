class Character {
  constructor(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(x) {
    this.x = this.x - 2;
  }
}

module.exports = Character;