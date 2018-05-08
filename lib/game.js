const Character = require('./Character.js');
const Froggy = require('./Froggy.js');
const Car = require('./Car.js');
const Loggy = require('./Loggy.js');
const frog = document.querySelector('.frog');
const truck = document.querySelector('.truck');
const log = document.querySelector('.log');
const collides = require('./collision.js').collides;
const drawBackground = require('./index.js').drawBackground;

class Game {
  constructor(context) {
    this.context = context;
    this.froggy = new Froggy(frog, 300, 400, 50, 50, 50);
    this.loggy = new Loggy(log, 0, 100, 100, 50, 2);
    this.loggy2 = new Loggy(log, 300, 150, 100, 50, -2);
    this.loggy3 = new Loggy(log, 500, 50, 100, 50, -2);
    this.car = new Car(truck, 580, 250, 100, 50, -2);
    this.car2 = new Car(truck, 580, 350, 100, 45, -3);
    this.car3 = new Car(truck, 500, 302, 100, 43, 3);
  }

  startAgain() {
    this.context.clearRect(0, 0, window.width, window.height);
    this.froggy.draw(this.context);
  }

  checkInBounds() {
    if(this.froggy.x < 0 || this.froggy.x > 590) {
      this.froggy.death();
      this.startAgain();
    } else if (this.froggy.y > 400) {
      this.froggy.y = 400;
      this.startAgain();
    }
  }

  roadKill(collides, char) {
    if(collides && 40 < this.froggy.y && this.froggy.y < 200) {
      this.froggy.x = this.froggy.x + char.velocity;
      this.froggy.draw(this.context);
    } else if (collides) {
      this.froggy.death();
      this.froggy.draw(this.context);
    }
  }

  gameScore() {
    if (this.froggy.y < 50) {
      this.froggy.scorePoint();
      this.froggy.y = 400;
      this.froggy.draw(this.context);
      const velociraptors = [this.car, this.car2, this.loggy2, this.loggy3]
      velociraptors.forEach(element => {
        element.velocity = element.velocity - 1;
      })
      this.car3.velocity++;
      this.loggy.velocity++;
    }
  }

  resetGame() {
    this.froggy.lives = 5;
    this.froggy.score = 0;
    this.car.velocity = -2;
    this.car2.velocity = -2;
    this.car3.velocity = 2;
    this.loggy.velocity = 2;
    this.loggy2.velocity = -2;
    this.loggy3.velocity = -2;
  }
}

module.exports = Game;