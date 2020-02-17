const chai = require('chai');
const Rover = require('../rover');
const COMPASS = require('../constants').COMPASS;

describe('Setup and move Rover', function() {
  describe('Move rover from 1 2 N', function() {
    const map = { x: 5, y: 5 };
    const startingPosition = { x: 1, y: 2 };
    const startingOrientation = COMPASS.NORTH;
    const instructions = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'];

    const expectedX = 1;
    const expectedY = 3;
    const expectedOrientation = COMPASS.NORTH;

    const rover = new Rover();
    rover.position = startingPosition;
    rover.orientation = startingOrientation;
    rover.instructions = instructions;
    rover.map = map;
    rover.execute();

    const { x, y } = rover.position;
    it(`location x,y should match ${expectedX} ${expectedY} ${rover.orientationStr}`, function() {
      chai.assert.equal(x, expectedX);
      chai.assert.equal(y, expectedY);
      chai.assert.equal(rover.orientation, expectedOrientation);
    });
  });

  describe('Move rover from 3 3 E', function() {
    const map = { x: 5, y: 5 };
    const startingPosition = { x: 3, y: 3 };
    const startingOrientation = COMPASS.EAST;
    const instructions = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'];

    const expectedX = 5;
    const expectedY = 1;
    const expectedOrientation = COMPASS.EAST;

    const rover = new Rover();
    rover.position = startingPosition;
    rover.orientation = startingOrientation;
    rover.instructions = instructions;
    rover.map = map;
    rover.execute();

    const { x, y } = rover.position;
    it(`location x,y should match ${expectedX} ${expectedY} ${rover.orientationStr}`, function() {
      chai.assert.equal(x, expectedX);
      chai.assert.equal(y, expectedY);
      chai.assert.equal(rover.orientation, expectedOrientation);
    });
  });
});
