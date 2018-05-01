var isGameOver = false;
var Block = require('./Block.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function gameLoop() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	blocks.forEach(block => {
		block.move().draw(context);
	});
	
	if (isGameOver) {
		//display final score and replay button
	} else {
		requestAnimationFrame(gameLoop);
	}
}