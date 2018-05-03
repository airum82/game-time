class Character {
  constructor(img, x, y, width, height, velocity) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }
}

module.exports = Character;