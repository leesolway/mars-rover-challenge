const constants = require('./constants');
const COMPASS = constants.COMPASS;
const COMPASS_SHORT = constants.COMPASS_SHORT;
const DIRECTIONS = constants.DIRECTIONS;

class Rover {
  constructor() {
    this._position = { x: 0, y: 0 };
    this._orientation = COMPASS.NORTH;
    this._instructions = [];
    this._map = { x: 5, y: 5 };
  }

  get instructions() {
    return this._instructions;
  }

  set instructions(instructions) {
    this._instructions = instructions;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation) {
    this._orientation = orientation;
  }

  get orientationStr() {
    return Object.keys(COMPASS_SHORT).find(k => COMPASS_SHORT[k] === this._orientation);
  }

  set orientationStr(orientationStr) {
    if (orientationStr in Object.keys(COMPASS_SHORT)) {
      console.log('error', orientationStr, 'LALALA');
      throw 'invalid orientation';
    }

    this._orientation = COMPASS_SHORT[orientationStr];
  }

  get position() {
    return this._position;
  }

  set position(position) {
    this._position = position;
  }

  get map() {
    return this._map;
  }

  set map(map) {
    this._map = map;
  }

  static calcOrientation(currentOrientation, instruction) {
    const addTo = instruction === DIRECTIONS.LEFT ? -1 : 1;
    const newOrientation = (currentOrientation + addTo + 4) % 4;
    return newOrientation;
  }

  static calcPosition(currentOrientation, { x, y }, { x: boundaryX, y: boundaryY }) {
    switch (true) {
      case currentOrientation === COMPASS.NORTH:
        y++;
        break;
      case currentOrientation === COMPASS.EAST:
        x++;
        break;
      case currentOrientation === COMPASS.SOUTH:
        y--;
        break;
      case currentOrientation === COMPASS.WEST:
        x--;
        break;
    }

    if (x > boundaryX || x < 0 || y > boundaryY || y < 0) {
      throw 'new position is out of bounds';
    }

    return { x, y };
  }

  formattedPosition() {
    return `${this.position.x} ${this.position.y} ${this.orientationStr}`;
  }

  execute() {
    this.instructions.forEach(instruction => {
      if (instruction == DIRECTIONS.LEFT || instruction === DIRECTIONS.RIGHT) {
        const newOrientation = this.constructor.calcOrientation(this.orientation, instruction);
        this.orientation = newOrientation;
        return;
      }

      const newPosition = this.constructor.calcPosition(this.orientation, this.position, this.map);
      this.position = newPosition;
    });
  }
}

module.exports = Rover;
