const assert = require('chai').assert;
const collides = require('../lib/collision.js').collides;
const Froggy = require('../lib/Froggy.js');
const Loggy = require('../lib/Loggy.js');
const Car = require('../lib/Car.js');
const Game = require('../lib/game.js');

// describe('Game', () => {
//     it('should instantiate a new game with all default properties', () => {
//         const game = new Game();

        
//         });
//     });

//     it('should create a new frog', () => {
//         const game = new Game();

//         assert.isObject(game.frogger);
//     });

//     it('can draw objects', () => {
//         const game = new Game();

//         assert.isFunction(game.draw);
//     });

    // it('lose a life if there is a collision with a car', () => {
    //     const game = new Game();

    //     game.roadKill = () => ;
    //     game.death = () => ;
    //     game.gameOver() =>;
    //     game.checkForRoadCollision();

    //     assert.equal(game.frogger.lives, 2);
    // });
   