const chai = require('chai');
const assert = chai.assert;
const Character = require('../lib/Character.js');
const Loggy = require('../lib/Loggy.js');

describe('Loggy', function () {
    let loggy;
    beforeEach(() => {
        loggy = new Loggy(10, 10, 10, 10, 10, 2)
    });
   
    it('should instantiate a new car with all default properties', () => {
        assert.equal(loggy.img, 10);
        assert.equal(loggy.x, 10);
        assert.equal(loggy.y, 10);
        assert.equal(loggy.width, 10);
        assert.equal(loggy.height, 10);
        assert.equal(loggy.velocity, 2);
    })

    it('should have inherited the move method from character class', () => {
        assert.isFunction(loggy.move);
    })

    it('move method should change x value by velocity', function () {
        loggy.move();
        assert.equal(loggy.x, 12)
    })

    it('should have inherited the animate method from character class', () => {
        assert.isFunction(loggy.animate);
    })
})