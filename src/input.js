const CONSTANTS = require('./constants');

function parseInitialPosition(input) {
  const data = input.split(' ');
  const [x, y, orientation] = data;

  if (orientation in CONSTANTS.COMPASS_SHORT === false) {
    throw 'Invalid orientation';
  }

  const position = {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
  };

  return [position, orientation];
}

function parseInstructions(input) {
  const instructionArr = input.split('');

  instructionArr.forEach(instruction => {
    if (instruction in CONSTANTS.DIRECTIONS_SHORT === false) {
      throw 'Invalid instruction';
    }
  });

  return instructionArr;
}

function parseMap(input) {
  const data = input.trim().split(' ');
  const [x, y] = data;
  const mapData = {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
  };

  return mapData;
}

function processInput(inputStr) {
  const instructionSets = [];
  const data = inputStr.trim().split('\n');

  const mapData = parseMap(data.shift());

  while (data.length > 0) {
    const cleanInitialPositionInput = data.shift().trim();
    const [initialPosition, initialOrientation] = parseInitialPosition(cleanInitialPositionInput);

    const cleanInstructionInput = data.shift().trim();
    const instructions = parseInstructions(cleanInstructionInput);

    instructionSets.push({
      mapData,
      initialPosition,
      initialOrientation,
      instructions,
    });
  }

  return instructionSets;
}

module.exports = {
  parseInitialPosition,
  parseInstructions,
  parseMap,
  processInput,
};
