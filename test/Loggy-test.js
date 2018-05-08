const chai = require('chai');
const assert = chai.assert;
const Character = require('../lib/Character.js');
const Loggy = require('../lib/Loggy.js');

describe('Loggy', function () {
    it('should return true', () => {
        assert.equal(true, true);
    });

    it('should instantiate a new car with all default properties', () => {
        var loggy = new Loggy(10, 10, 10, 10, 10, 2);

        assert.equal(loggy.img, 10);
        assert.equal(loggy.x, 10);
        assert.equal(loggy.y, 10);
        assert.equal(loggy.width, 10);
        assert.equal(loggy.height, 10);
        assert.equal(loggy.velocity, 2);
    })

    it('should have inherited the move method from character class', () => {
        var loggy = new Loggy();

        assert.isFunction(loggy.move);
    })

    it('should have inherited the animate method from character class', () => {
        var loggy = new Loggy();

        assert.isFunction(loggy.animate);
    })
})