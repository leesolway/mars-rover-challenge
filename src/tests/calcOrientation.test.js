const assert = require('chai').assert;

const CONSTANTS = require('../constants');
const COMPASS = CONSTANTS.COMPASS;
const DIRECTIONS = CONSTANTS.DIRECTIONS;
const rover = require('../rover');

describe('calcOrientation', function() {
  const result = rover.calcOrientation(COMPASS.NORTH, DIRECTIONS.LEFT);
  const expectedResult = COMPASS.WEST;

  it(`should return ${expectedResult}`, function() {
    assert.equal(result, expectedResult);
  });
});

describe('calcOrientation', function() {
  const result = rover.calcOrientation(COMPASS.EAST, DIRECTIONS.LEFT);
  const expectedResult = COMPASS.NORTH;

  it(`should return ${expectedResult}`, function() {
    assert.equal(result, expectedResult);
  });
});

describe('calcOrientation', function() {
  const result = rover.calcOrientation(COMPASS.SOUTH, DIRECTIONS.RIGHT);
  const expectedResult = COMPASS.WEST;

  it(`should return ${expectedResult}`, function() {
    assert.equal(result, expectedResult);
  });
});

describe('calcOrientation', function() {
  const result = rover.calcOrientation(COMPASS.WEST, COMPASS.RIGHT);
  const expectedResult = COMPASS.NORTH;

  it(`should return ${expectedResult}`, function() {
    assert.equal(result, expectedResult);
  });
});
