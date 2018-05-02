const chai = require('chai');
const assert = chai.assert;
const Froggy = require('../lib/Froggy.js');
const Character = require('../lib/Character.js');
const Car = require('../lib/Car.js');
const Loggy = require('../lib/Loggy.js');

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
    var froggy = new Froggy(10, 10, 40, 40);
    assert.equal(froggy.x, 10);
    assert.equal(froggy.y, 10);
  })

  it('should have inherited the move method from character class', function() {
    var froggy = new Froggy(20, 20, 50, 50);
    froggy.move(30, 30);
    assert.equal(froggy.x, 30);
  })
})

describe('Car', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have an x and y coordinate value', function() {
    var car = new Car(10, 10, 40, 40);
    assert.equal(car.x, 10);
    assert.equal(car.y, 10);
  })

  it('should have inherited the move method from character class', function() {
    var car = new Car(20, 20, 50, 50);
    car.move(30, 30);
    assert.equal(car.x, 30);
  })
})

describe('Loggy', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have an x and y coordinate value', function() {
    var loggy = new Loggy(10, 10, 40, 40);
    assert.equal(loggy.x, 10);
    assert.equal(loggy.y, 10);
  })

  it('should have inherited the move method from character class', function() {
    var loggy = new Loggy(20, 20, 50, 50);
    loggy.move(30, 30);
    assert.equal(loggy.x, 30);
  })
})

