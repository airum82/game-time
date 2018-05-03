var isGameOver = false;
var Froggy = require('./Froggy.js');
var Car = require('./Car.js');
var Loggy = require('./Loggy.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'rgba(0, 255, 0, 1)';
context.fillRect(0, 530, 600, 40);
context.fillRect(0, 280, 600, 40);
context.fillRect(0, 0, 600, 40);
context.fillStyle = 'blue';
context.fillRect(0, 40, 600, 240);

function addStreetLines() {
		var x = 0;
		var y = 480;
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

addStreetLines();

function redrawBackground() {
	context.clearRect(froggy.x, froggy.y, froggy.width, froggy.height);
	if (froggy.y < 500 && froggy.y > 260) {
		context.fillStyle = 'black';
	} else if (froggy.y < 220 && froggy.y > 50) {
		context.fillStyle = 'blue';
	} else {
		context.fillStyle = 'rgba(0, 255, 0, 1)';
	}
	context.fillRect(froggy.x, froggy.y, froggy.width, froggy.height);
}

var frog = document.querySelector('.frog');
var truck = document.querySelector('.truck');
var log = document.querySelector('.log');

var froggy = new Froggy(frog, 300, 530, 35, 35);
var car = new Car(truck, 580, 380, 60, 50, 2);
var loggy = new Loggy(log, 0, 200, 100, 60, 2);

function drawFrog() {
	context.drawImage(froggy.img, froggy.x, froggy.y, froggy.width, froggy.height);
}

drawFrog();
window.addEventListener('keydown', () => {
	switch(event.key) {
		case 'ArrowUp':
		froggy.y = froggy.y - 46;
		redrawBackground();
		drawFrog();
		break;

		case 'ArrowDown':
		froggy.y = froggy.y + 46;
		redrawBackground();
		drawFrog();
		break;

		case 'ArrowLeft':
		froggy.x = froggy.x - 46;
		redrawBackground();
		drawFrog();
		break;

		case 'ArrowRight':
		froggy.x = froggy.x + 46;
		redrawBackground();
		drawFrog();
		break;
	}
})

function drawTruck() {
	context.drawImage(car.img, car.x, car.y, car.width, car.height);
}

drawTruck();

function drawLog() {
	context.drawImage(loggy.img, loggy.x, loggy.y, loggy.width, loggy.height);
}

drawLog();
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
	
// 	if (isGameOver) {
// 		//display final score and replay button
// 	} else {
// 		requestAnimationFrame(gameLoop);
// 	}
// }