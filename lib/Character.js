class Character {
  constructor(img, x, y, width, height, velocity) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }

  animate(context, color) {
    context.clearRect(this.x, this.y, this.width, this.height);
    context.fillStyle = color;
    context.fillRect(this.x, this.y, this.width, this.height);
    this.x = this.x + this.velocity;
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

module.exports = Character;