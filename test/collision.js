const chai = require('chai');
const collides = require('../lib/collision.js').collides;
const Froggy = require('../lib/Froggy.js');
const Loggy = require('../lib/Loggy.js');
const Car = require('../lib/Car.js');
var assert = require('chai').assert;

describe('collides', () => {
	it('should be a function', () => {
		assert.isFunction(collides);
	});

	it('should return true', () => {
		assert.equal(true, true);
	});

	it('should take an argument for character1 and character2', () => {
		let character1 = new Froggy(10, 40, 40, 10, 10);
		let character2 = new Loggy(10, 40, 40, 10, 10)
		
		assert.equal(collides(character1, character2), true);
	});
})