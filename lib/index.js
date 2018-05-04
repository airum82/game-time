var isGameOver = false;
var Froggy = require('./Froggy.js');
var Car = require('./Car.js');
var Loggy = require('./Loggy.js');
var collides = require('./collision.js').collides;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function drawBackground() {
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'rgba(0, 255, 0, 1)';
context.fillRect(0, 550, 600, 50);
context.fillRect(0, 300, 600, 50);
context.fillRect(0, 0, 600, 50);
context.fillStyle = 'blue';
context.fillRect(0, 50, 600, 250);
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
var car = new Car(truck, 580, 400, 60, 50, 2);
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
	if (car.x < -60) {
		return
	}
	requestAnimationFrame(makeCar);
	context.clearRect(car.x, car.y, car.width, car.height);
	context.fillStyle = 'black';
	context.fillRect(car.x, car.y, car.width, car.height);
	car.move();
	context.drawImage(car.img, car.x, car.y, car.width, car.height);
	roadKill();
}

makeCar();

function makeLog() {
	if (loggy.x > 620) {
		return
	}
	requestAnimationFrame(makeLog);
	context.clearRect(loggy.x, loggy.y, loggy.width, loggy.height);
	context.fillStyle = 'blue';
	context.fillRect(loggy.x, loggy.y, loggy.width, loggy.height);
	loggy.move();
	context.drawImage(loggy.img, loggy.x, loggy.y, loggy.width, loggy.height);
}

makeLog();


function roadKill() {
	if(collides(froggy, car)) {
		console.log('Winner winner froggy dinner!...just kidding, you\'re a murderer!');
	}
}
	
// 	if (isGameOver) {
// 		//display final score and replay button
// 	} else {
// 		requestAnimationFrame(gameLoop);
// 	}
// }