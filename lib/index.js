var isGameOver = false;
var Froggy = require('./Froggy.js');
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

function drawFrog() {
	context.drawImage(frog, 300, 530, 35, 35);
}

drawFrog();

function drawTruck() {
	context.drawImage(truck, 200, 380, 60, 60);
}

drawTruck();

function drawLog() {
	context.drawImage(log, 100, 200, 100, 60);
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