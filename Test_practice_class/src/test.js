const {createRobot} = require('./robot');

const {getFacing, getPosition} = createRobot(0,0,'AARAA');

console.log('facing:', getFacing());
console.log('position:', getPosition());