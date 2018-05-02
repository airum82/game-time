var isGameOver = false;
var Froggy = require('./Froggy.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'green';
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

console.log('asdfasdfa');

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