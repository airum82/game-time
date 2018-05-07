const Froggy = require('./Froggy.js');
const Car = require('./Car.js');
const Loggy = require('./Loggy.js');
const collides = require('./collision.js').collides;
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const frog = document.querySelector('.frog');
const truck = document.querySelector('.truck');
const log = document.querySelector('.log');
const skully = document.querySelector('.skully');
const winner = document.querySelector('.winner');
const froggy = new Froggy(frog, 300, 400, 50, 50, 50);
const loggy = new Loggy(log, 0, 100, 100, 50, 2);
const loggy2 = new Loggy(log, 300, 150, 100, 50, -2);
const loggy3 = new Loggy(log, 500, 50, 100, 50, -2);
const car = new Car(truck, 580, 250, 100, 50, -2);
const car2 = new Car(truck, 580, 350, 100, 45, -3);
const car3 = new Car(truck, 500, 302, 100, 43, 3);

( window ).addEventListener('load', () => {
	drawBackground();
	froggy.draw(context);
	makeCar();
	makeLog();
});

document.querySelector('button').addEventListener('click', resetGame);

function drawBackground() {
	context.fillStyle = 'rgb(44, 58, 32, 1)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = 'rgb(181, 252, 118, 1)';
	context.fillRect(0, 400, 600, 50);
	context.fillRect(0, 200, 600, 50);
	context.fillRect(0, 0, 600, 150);
	context.fillStyle = 'blue';
	context.fillRect(0, 50, 600, 150);
	addStreetLines();
}

function addStreetLines() {
		var x = 0;
		var y = 350;
		var endX = 600;
	for(var i = 0; i < 2; i++) {
		context.strokeStyle = 'white';
		context.setLineDash([5]);
		context.strokeWidth = 2;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(endX, y);
		context.stroke();
		y = y - 50;
	}
}

function refreshBackground() {
	event.preventDefault();
	context.clearRect(0, 0, window.width, window.height);
	drawBackground();
	froggy.draw(context);
}

window.addEventListener('keydown', () => {
	if(froggy.lives < 1 || froggy.score > 2) {
		return;
	}
	switch(event.key) {
		case 'ArrowUp':
		froggy.y = froggy.y - froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowDown':
		froggy.y = froggy.y + froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowLeft':
		froggy.x = froggy.x - froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowRight':
		froggy.x = froggy.x + froggy.velocity;
		refreshBackground();
		break;
	}
})

function checkInBounds() {
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

function makeCar() {
	if (car.x < -100) {
		car.x = 580;
	}
	if(car2.x < -100) {
		car2.x = 580;
	}
	if(car3.x > 700) {
		car3.x = -20;
	}
	if (froggy.lives < 1 || froggy.score > 2) {
		return;
	}
	requestAnimationFrame(makeCar);
	car.animate(context, 'rgb(44, 58, 32, 1)');
	car2.animate(context, 'rgb(44, 58, 32, 1)');
	car3.animate(context, 'rgb(44, 58, 32, 1)');
	roadKill(collides(froggy, car));
	roadKill(collides(froggy, car2));
	roadKill(collides(froggy, car3));
	gameScore();
	checkInBounds();
}

function makeLog() {
	if (loggy.x > 620) {
		loggy.x = 0;
	}
	if (loggy2.x < -100) {
		loggy2.x = 700;
	}
	if (loggy3.x < -100) {
		loggy3.x = 700;
	}
	if (froggy.lives < 1 || froggy.score > 2) {
		return;
	}

	if(froggy.y < 200 && !collides(froggy, loggy) && !collides(froggy, loggy2) && !collides(froggy, loggy3) && froggy.y > 40) {
		froggy.death();
		document.querySelector('#lives').innerText = froggy.lives;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		froggy.draw(context);
	}
	requestAnimationFrame(makeLog);
	loggy.animate(context, 'blue');
	loggy2.animate(context, 'blue');
	loggy3.animate(context, 'blue');
	logJump(collides(froggy, loggy2), loggy2);
	logJump(collides(froggy, loggy), loggy);
	logJump(collides(froggy, loggy3), loggy3);
}

function logJump(collides, char) {
	if(collides) {
		froggy.x = froggy.x + char.velocity;
		froggy.draw(context);
	}
}

function roadKill(collides) {
	if(collides) {
		froggy.death();
		froggy.draw(context);
		document.querySelector('#lives').innerText = froggy.lives;
		gameOver();
	}
}

function gameOver(){
	if (froggy.lives < 1) {
		playAgain();
		context.drawImage(skully, 200, 100, 200, 300);
	}
}

function resetGame(){
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

function playAgain() {
	document.querySelector('button').style.display = 'block';
}

function gameScore() {
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