const chai = require('chai');
const assert = chai.assert;
const Froggy = require('../lib/Froggy.js');
const Character = require('../lib/Character.js');

describe('Froggy', function () {
    it('should return true', function () {
        assert.equal(true, true);
    });

    it('should instantiate a new froggy with all default properties', () => {
        const froggy = new Froggy(10, 10, 10, 10, 10, 2);

        assert.isObject(froggy);
        assert.equal(froggy.img, 10);
        assert.equal(froggy.x, 10);
        assert.equal(froggy.y, 10);
        assert.equal(froggy.width, 10);
        assert.equal(froggy.height, 10);
        assert.equal(froggy.velocity, 2);
    });

    it('should have inherited the move method from character class', () => {
        var froggy = new Froggy();
        
        assert.isFunction(froggy.move);
    })

    it('should have the draw', () => {
        var froggy = new Froggy();

        assert.isFunction(froggy.draw);
    })

    it('should have the death method', () => {
        var froggy = new Froggy();

        assert.isFunction(froggy.death);
    })

    it('should have the scorePoint method', () => {
        var froggy = new Froggy();

        assert.isFunction(froggy.scorePoint);
    })
})