const Froggy = require('./Froggy.js');
const Car = require('./Car.js');
const Loggy = require('./Loggy.js');
const froggy = new Froggy(frog, 300, 400, 50, 50, 50);
const loggy = new Loggy(log, 0, 100, 100, 50, 2);
const loggy2 = new Loggy(log, 300, 150, 100, 50, -2);
const loggy3 = new Loggy(log, 500, 50, 100, 50, -2);
const car = new Car(truck, 580, 250, 100, 50, -2);
const car2 = new Car(truck, 580, 350, 100, 45, -3);
const car3 = new Car(truck, 500, 302, 100, 43, 3);
const frog = document.querySelector('.frog');
const truck = document.querySelector('.truck');
const log = document.querySelector('.log');
const collides = require('./collision.js').collides;
const context = require('./index.js');

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

  refreshBackground() {
    event.preventDefault();
    context.clearRect(0, 0, window.width, window.height);
    drawBackground();
    froggy.draw(context);
  }

  checkInBounds() {
    if(froggy.x < 0 || froggy.x > 590) {
      froggy.death();
      context.clearRect(0, 0, window.width, window.height);
      froggy.draw(context);
      document.querySelector('#lives').innerText = froggy.lives;
    } else if (froggy.y > 400) {
      froggy.y = 400;
      context.clearRect(0, 0, window.width, window.height);
      froggy.draw(context);
    }
  }

  logJump(collides, char) {
    if(collides) {
      froggy.x = froggy.x + char.velocity;
      froggy.draw(context);
    }
  }

  roadKill(collides) {
    if(collides) {
      froggy.death();
      froggy.draw(context);
      document.querySelector('#lives').innerText = froggy.lives;
      gameOver();
    }
  }

  gameOver() {
    if (froggy.lives < 1) {
      playAgain();
      context.drawImage(skully, 200, 100, 200, 300);
    }
  }

  gameScore() {
    if (froggy.y < 50) {
      froggy.scorePoint();
      context.clearRect(0, 0, window.width, window.height);
      drawBackground();
      froggy.y = 400;
      froggy.draw(context);
      document.querySelector('#score').innerText = froggy.score;
      car.velocity--;
      car2.velocity--;
      car3.velocity++;
      loggy.velocity++;
      loggy2.velocity--;
      loggy3.velocity--;
    }

    if(froggy.score > 2) {
      context.drawImage(winner, 150, 100, 300, 200);
      playAgain();
    }
  }

  resetGame(){
    froggy.lives = 5;
    froggy.score = 0;
    document.querySelector('#lives').innerText = froggy.lives;
    document.querySelector('#score').innerText = 0;
    document.querySelector('button').style.display = 'none';
    drawBackground();
    froggy.draw(context);
    makeCar();
    makeLog();
    car.velocity = -2;
    car2.velocity = -2;
    car3.velocity = 2;
    loggy.velocity = 2;
    loggy2.velocity = -2;
    loggy3.velocity = -2;
  }
}
module.exports = Game;