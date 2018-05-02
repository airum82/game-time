const chai = require('chai');
const assert = chai.assert;
const Froggy = require('../lib/Froggy.js');
const Character = require('../lib/Character.js');

describe('Character', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have an x and y coordinate value', function() {
    var car = new Character(10, 10, 40, 40);
    assert.equal(car.x, 10);
    assert.equal(car.y, 10);
  })
})

describe('Froggy', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have an x and y coordinate value', function() {
    var froggy = new Character(10, 10, 40, 40);
    assert.equal(froggy.x, 10);
    assert.equal(froggy.y, 10);
  })

  it('should have inherited the move method from character class', function() {
    var froggy = new Character(20, 20, 50, 50);
    froggy.move(30, 30);
    assert.equal(froggy.x, 30);
  })
})

