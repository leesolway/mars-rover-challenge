const chai = require('chai');

const CONSTANTS = require('../constants');
const COMPASS = CONSTANTS.COMPASS;
const rover = require('../rover');

describe('calcPosition', function() {
  const currentLocation = { x: 0, y: 0 };
  const currentOrientation = COMPASS.NORTH;
  const boundry = { x: 5, y: 5 };

  const expectedX = 0;
  const expectedY = 1;

  const { x, y } = rover.calcPosition(currentOrientation, currentLocation, boundry);

  it(`location x,y should match x:${expectedX} y:${expectedY}`, function() {
    chai.assert.equal(x, expectedX);
    chai.assert.equal(y, expectedY);
  });
});

describe('calcPosition', function() {
  const currentLocation = { x: 2, y: 4 };
  const currentOrientation = COMPASS.WEST;
  const boundry = { x: 5, y: 5 };

  const expectedX = 1;
  const expectedY = 4;

  const { x, y } = rover.calcPosition(currentOrientation, currentLocation, boundry);

  it(`location x,y should match x:${expectedX} y:${expectedY}`, function() {
    chai.assert.equal(x, expectedX);
    chai.assert.equal(y, expectedY);
  });
});

describe('calcPosition - Out of Bounds', function() {
  const currentLocation = { x: 2, y: 2 };
  const currentOrientation = COMPASS.NORTH;
  const boundry = { x: 2, y: 2 };

  it(`location x,y should throw an error`, function() {
    chai
      .expect(function() {
        rover.calcPosition(currentOrientation, currentLocation, boundry);
      })
      .to.throw();
  });
});
