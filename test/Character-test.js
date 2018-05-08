const chai = require('chai');
const assert = chai.assert;
const Character = require('../lib/Character.js');


describe('Character',  () => {
    it('should return true', () => {
        assert.equal(true, true);
    });

    it('should instantiate a new character with all default properties', () => {
        var character = new Character(40, 40, 40, 40);
        assert.equal(character.x, 40);
        assert.equal(character.y, 40);
    })

    it('should have inherited the animate method from character class', () => {
        var character = new Character();

        assert.isFunction(character.animate);
    })
})