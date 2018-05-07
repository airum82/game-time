const collides = require('./collision.js').collides;
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const skully = document.querySelector('.skully');
const winner = document.querySelector('.winner');
const Game = require('./game.js');

const game = new Game(context);

window.onload = () => {
	drawBackground();
	game.froggy.draw(context);
	makeCar();
	makeLog();
};

document.querySelector('button').addEventListener('click', game.resetGame);

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
	game.froggy.draw(context);
}

window.addEventListener('keydown', () => {
	if(game.froggy.lives < 1 || game.froggy.score > 2) {
		return;
	}
	switch(event.key) {
		case 'ArrowUp':
		game.froggy.y = game.froggy.y - game.froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowDown':
		game.froggy.y = game.froggy.y + game.froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowLeft':
		game.froggy.x = game.froggy.x - game.froggy.velocity;
		refreshBackground();
		break;

		case 'ArrowRight':
		game.froggy.x = game.froggy.x + game.froggy.velocity;
		refreshBackground();
		break;
	}
})

// function checkInBounds() {
//   if(game.froggy.x < 0 || game.froggy.x > 590) {
//       game.froggy.death();
//       context.clearRect(0, 0, window.width, window.height);
//       game.froggy.draw(context);
//       document.querySelector('#lives').innerText = game.froggy.lives;
//   } else if (game.froggy.y > 400) {
//   	game.froggy.y = 400;
//   	context.clearRect(0, 0, window.width, window.height);
//     game.froggy.draw(context);
//   }
// }

function makeCar() {
	if (game.car.x < -100) {
		game.car.x = 580;
	}
	if(game.car2.x < -100) {
		game.car2.x = 580;
	}
	if(game.car3.x > 700) {
		game.car3.x = -20;
	}
	if (game.froggy.lives < 1 || game.froggy.score > 2) {
		return;
	}
	requestAnimationFrame(makeCar);
	game.car.animate(context, 'rgb(44, 58, 32, 1)');
	game.car2.animate(context, 'rgb(44, 58, 32, 1)');
	game.car3.animate(context, 'rgb(44, 58, 32, 1)');
	game.roadKill(collides(game.froggy, game.car));
	game.roadKill(collides(game.froggy, game.car2));
	game.roadKill(collides(game.froggy, game.car3));
	game.gameScore(game.froggy);
	game.checkInBounds();
}

function makeLog() {
	if (game.loggy.x > 620) {
		game.loggy.x = 0;
	}
	if (game.loggy2.x < -100) {
		game.loggy2.x = 700;
	}
	if (game.loggy3.x < -100) {
		game.loggy3.x = 700;
	}
	if (game.froggy.lives < 1 || game.froggy.score > 2) {
		return;
	}

	if(game.froggy.y < 200 && !collides(game.froggy, game.loggy) && !collides(game.froggy, game.loggy2) && !collides(game.froggy, game.loggy3) && game.froggy.y > 40) {
		game.froggy.death();
		document.querySelector('#lives').innerText = game.froggy.lives;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		game.froggy.draw(context);
	}
	requestAnimationFrame(makeLog);
	game.loggy.animate(context, 'blue');
	game.loggy2.animate(context, 'blue');
	game.loggy3.animate(context, 'blue');
	game.logJump(collides(game.froggy, game.loggy2), game.loggy2);
	game.logJump(collides(game.froggy, game.loggy), game.loggy);
	game.logJump(collides(game.froggy, game.loggy3), game.loggy3);
}

// function logJump(collides, char) {
// 	if(collides) {
// 		game.froggy.x = game.froggy.x + char.velocity;
// 		game.froggy.draw(context);
// 	}
// }

// function game.roadKill(collides) {
// 	if(collides) {
// 		game.froggy.death();
// 		game.froggy.draw(context);
// 		document.querySelector('#lives').innerText = game.froggy.lives;
// 		gameOver();
// 	}
// }

// function gameOver(){
// 	if (game.froggy.lives < 1) {
// 		playAgain();
// 		context.drawImage(skully, 200, 100, 200, 300);
// 	}
// }

function resetGame(){
	game.froggy.lives = 5;
	game.froggy.score = 0;
	document.querySelector('#lives').innerText = game.froggy.lives;
	document.querySelector('#score').innerText = 0;
	document.querySelector('button').style.display = 'none';
	drawBackground();
	game.froggy.draw(context);
	makeCar();
	makeLog();
	game.car.velocity = -2;
	game.car2.velocity = -2;
	game.car3.velocity = 2;
	game.loggy.velocity = 2;
	game.loggy2.velocity = -2;
	game.loggy3.velocity = -2;
}

function playAgain() {
	document.querySelector('button').style.display = 'block';
}

// function gameScore() {
// 	if (game.froggy.y < 50) {
// 		game.froggy.scorePoint();
// 		context.clearRect(0, 0, window.width, window.height);
// 		drawBackground();
// 		game.froggy.y = 400;
// 		game.froggy.draw(context);
// 		document.querySelector('#score').innerText = game.froggy.score;
// 		game.car.velocity--;
// 		game.car2.velocity--;
// 		game.car3.velocity++;
// 		game.loggy.velocity++;
// 		game.loggy2.velocity--;
// 		game.loggy3.velocity--;
// 	}

// 	if(game.froggy.score > 2) {
// 		context.drawImage(winner, 150, 100, 300, 200);
// 		playAgain();
// 	}
// }

module.exports = context;

