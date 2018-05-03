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

var frog = document.querySelector('.frog');
var truck = document.querySelector('.truck');
var log = document.querySelector('.log');

var froggy = new Froggy(frog, 300, 530, 35, 35);
var car = new Car(truck, 200, 380, 60, 60);
var loggy = new Loggy(log, 100, 200, 100, 60);

function drawFrog() {
	context.drawImage(froggy.img, froggy.x, froggy.y, froggy.width, froggy.height);
}

drawFrog();

function drawTruck() {
	context.drawImage(car.img, car.x, car.y, car.width, car.height);
}

drawTruck();

function drawLog() {
	context.drawImage(loggy.img, loggy.x, loggy.y, loggy.width, loggy.height);
}

drawLog();

// function gameLoop() {
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	blocks.forEach(block => {
// 		block.move().draw(context);
// 	});
	
// 	if (isGameOver) {
// 		//display final score and replay button
// 	} else {
// 		requestAnimationFrame(gameLoop);
// 	}
// }