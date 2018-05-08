const chai = require('chai');
const assert = chai.assert;
const Character = require('../lib/Character.js');
const Car = require('../lib/Car.js');


describe('Car', function () {
    it('should return true', function () {
        assert.equal(true, true);
    });

    it('should instantiate a new car with all default properties', function () {
        var car = new Car(10, 10, 10, 10, 10, 2);

        assert.isObject(car)
        assert.equal(car.img, 10);
        assert.equal(car.x, 10);
        assert.equal(car.y, 10);
        assert.equal(car.width, 10);
        assert.equal(car.height, 10);
        assert.equal(car.velocity, 2);
    })

    it('should have inherited the move method from character class', function () {
        var car = new Car();
        
        assert.isFunction(car.move);
    })

    it('should have inherited the animate method from character class', function () {
        var car = new Car();

        assert.isFunction(car.animate);
    })
})