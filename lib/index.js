var isGameOver = false;
var Froggy = require('./Froggy.js');
var Car = require('./Car.js');
var Loggy = require('./Loggy.js');
var collides = require('./collision.js').collides;
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var play = true;
var winCondition = false;

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

( window ).addEventListener('load', () => {
	drawBackground();
	froggy.draw(context);
});

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

var frog = document.querySelector('.frog');
var truck = document.querySelector('.truck');
var log = document.querySelector('.log');

var froggy = new Froggy(frog, 300, 400, 50, 50, 50,);
var car = new Car(truck, 580, 250, 100, 50, 2);
var loggy = new Loggy(log, 0, 100, 100, 50, -2);

froggy.draw(context);

window.addEventListener('keyup', () => {
	switch(event.key) {
		case 'ArrowUp':
		event.preventDefault();
		froggy.y = froggy.y - froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		froggy.draw(context);
		break;

		case 'ArrowDown':
		event.preventDefault();
		froggy.y = froggy.y + froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		froggy.draw(context);
		break;

		case 'ArrowLeft':
		froggy.x = froggy.x - froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		froggy.draw(context);
		break;

		case 'ArrowRight':
		froggy.x = froggy.x + froggy.velocity;
		context.clearRect(0, 0, window.width, window.height);
		drawBackground();
		froggy.draw(context);
		break;
	}
})

function makeCar() {
	if (car.x < -100) {
		car.x = 580;
	}
	requestAnimationFrame(makeCar);
	car.animate(context, 'rgb(44, 58, 32, 1)');
	roadKill(collides(froggy, car));
	gameScore();
}

var car2 = new Car(truck, 580, 350, 100, 45, 3);
var car3 = new Car(truck, 500, 302, 100, 43, -3);

function makeCar2() {
	if(car2.x < -100) {
		car2.x = 580;
	}
	if(car3.x > 700) {
		car3.x = -20;
	}
	requestAnimationFrame(makeCar2);
	car2.animate(context, 'rgb(44, 58, 32, 1)');
	car3.animate(context, 'rgb(44, 58, 32, 1)');
	roadKill(collides(froggy, car2));
}

setTimeout(makeCar2, 3000);

makeCar();

function makeLog() {
	if (loggy.x > 620) {
		loggy.x = 0;
	}
	requestAnimationFrame(makeLog);
	loggy.animate(context, 'blue');
}

makeLog();

function roadKill(collides) {
	if(collides === true) {
		froggy.death();
		froggy.draw(context);
		document.querySelector('#lives').innerText = froggy.lives;
		gameOver();
	}
}

function floatOnLog(){

}

function gameOver(){
	if (froggy.lives < 1) {
		playAgain();
	}
}

function resetGame(){
	froggy.lives = 5;
	froggy.score = 0;
	document.querySelector('#lives').innerText = froggy.lives;
	document.querySelector('#score').innerText = 0;
	play = true;
	document.querySelector('button').style.display = 'none';
	froggy.draw(context);
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
	}
}