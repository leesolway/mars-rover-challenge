const fs = require('fs');
const Rover = require('./rover');
const input = require('./input');

function main() {
  const fileContent = fs.readFileSync('./src/instructions.txt', 'utf8');
  const roverData = input.processInput(fileContent);

  roverData.forEach(function(row) {
    const rover = new Rover();

    rover.position = row.initialPosition;
    rover.orientationStr = row.initialOrientation;
    rover.instructions = row.instructions;
    rover.map = row.mapData;
    rover.execute();

    console.log(`\x1b[32m${rover.formattedPosition()}\x1b[0m`);
  });
}

main();

module.exports = {
  main,
};
