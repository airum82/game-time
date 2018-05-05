var isGameOver = false;
var Froggy = require('./Froggy.js');
var Car = require('./Car.js');
var Loggy = require('./Loggy.js');
var collides = require('./collision.js').collides;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var lives = 3;
var lostLives = 0;
var play = true;
var winCondition = false;

function drawBackground() {
	context.fillStyle = 'rgb(44, 58, 32, 1)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = 'rgb(181, 252, 118, 1)';
	context.fillRect(0, 550, 600, 50);
	context.fillRect(0, 300, 600, 50);
	context.fillRect(0, 100, 600, 150);
	context.fillStyle = 'blue';
	context.fillRect(0, 150, 600, 150);
	addStreetLines();
}

( window ).addEventListener('load', () => {
	drawBackground();
	drawFrog();
});

function addStreetLines() {
		var x = 0;
		var y = 500;
		var endX = 600;
	for(var i = 0; i < 3; i++) {
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

var frog = document.querySelector('.frog');
var truck = document.querySelector('.truck');
var log = document.querySelector('.log');

var froggy = new Froggy(frog, 300, 550, 50, 50, 50);
var car = new Car(truck, 580, 400, 100, 50, 2);
var loggy = new Loggy(log, 0, 200, 100, 50, 2);

function drawFrog() {
	context.drawImage(froggy.img, froggy.x, froggy.y, froggy.width, froggy.height);
}

drawFrog();
window.addEventListener('keyup', () => {
	switch(event.key) {
		case 'ArrowUp':
		froggy.y = froggy.y - froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		drawFrog();
		break;

		case 'ArrowDown':
		froggy.y = froggy.y + froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		drawFrog();
		break;

		case 'ArrowLeft':
		froggy.x = froggy.x - froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		drawFrog();
		break;

		case 'ArrowRight':
		froggy.x = froggy.x + froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		drawFrog();
		break;
	}
})

function drawTruck() {
	context.drawImage(car.img, car.x, car.y, car.width, car.height);
}

function drawLog() {
	context.drawImage(loggy.img, loggy.x, loggy.y, loggy.width, loggy.height);
}

function makeCar() {
	if (car.x < -100) {
		car.x = 580;
	}
	requestAnimationFrame(makeCar);
	context.clearRect(car.x, car.y, car.width, car.height);
	context.fillStyle = 'rgb(44, 58, 32, 1)';
	context.fillRect(car.x, car.y, car.width, car.height);
	car.move();
	context.drawImage(car.img, car.x, car.y, car.width, car.height);
	roadKill(collides(froggy, car));
}

var car2 = new Car(truck, 580, 350, 100, 45, 3);

function makeCar2() {
	if (car2.x < -100) {
		car2.x = 580;
	}
	requestAnimationFrame(makeCar2);
	context.clearRect(car2.x, car2.y, car2.width, car2.height);
	context.fillStyle = 'rgb(44, 58, 32, 1)';
	context.fillRect(car2.x, car2.y, car2.width, car2.height);
	car2.move();
	context.drawImage(car2.img, car2.x, car2.y, car2.width, car2.height);
	roadKill(collides(froggy, car2));
}

makeCar();
setTimeout(makeCar2, 3000);

function makeLog() {
	if (loggy.x > 620) {
		loggy.x = 0;
	}
	requestAnimationFrame(makeLog);
	context.clearRect(loggy.x, loggy.y, loggy.width, loggy.height);
	context.fillStyle = 'blue';
	context.fillRect(loggy.x, loggy.y, loggy.width, loggy.height);
	loggy.move();
	context.drawImage(loggy.img, loggy.x, loggy.y, loggy.width, loggy.height);
}

makeLog();

function roadKill(collides) {
	if(collides === true) {
		froggy.death();
		drawFrog();
		lostLives++;
	}
}

function floatOnLog(){

}
	
// 	if (isGameOver) {
// 		//display final score and replay button
// 	} else {
// 		requestAnimationFrame(gameLoop);
// 	}
// }