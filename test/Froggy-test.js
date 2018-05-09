const chai = require('chai');
const assert = chai.assert;
const Froggy = require('../lib/Froggy.js');
const Character = require('../lib/Character.js');

describe('Froggy', function () {
    let froggy;
    beforeEach(() => {
        froggy = new Froggy(10, 10, 10, 10, 10, 2)
    });

    it('should instantiate a new froggy with all default properties', () => {
       assert.isObject(froggy);
        assert.equal(froggy.img, 10);
        assert.equal(froggy.x, 10);
        assert.equal(froggy.y, 10);
        assert.equal(froggy.width, 10);
        assert.equal(froggy.height, 10);
        assert.equal(froggy.velocity, 2);
    });

    it('should have the draw', () => {
        assert.isFunction(froggy.draw);
    })

    it('should have the death method', () => {
        assert.isFunction(froggy.death);
    })

    it('death method should make froggy lose a life', () => {
        assert.equal(froggy.lives, 5);
        froggy.death();
        assert.equal(froggy.lives, 4);
    })

    it('should have the scorePoint method', () => {
       assert.isFunction(froggy.scorePoint);
    })

    it('score method should increase froggy score', () => {
        assert.equal(froggy.score, 0);
        froggy.scorePoint();
        assert.equal(froggy.score, 1);
    })
})