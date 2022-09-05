exports.createRobot = (x,y, instructions='') => {
  let facing = 'North';
  let _x = x;
  let _y = y;
  instructions.map(elem => {
    if(elem==='R') turn_right();
    if(elem==='L') turn_left();
    if(elem==='A') advance();
  });
  
function turn_right() {
  switch (facing) {
    case 'North':
    facing = 'East';
    break;

    case 'East':
      facing = 'South';
      break;
    
    case 'South':
      facing = 'West';
      break;
    
    case 'West':
      facing = 'North';
      break;
  
    default:
      break;
  }

}
function turn_left() {
  if(facing==='North') facing = 'West';
  if(facing==='East') facing = 'North';
  if(facing==='South') facing = 'East';
  if(facing==='West') facing = 'South';

}
function advance() {
  if(facing==='North' && _y>=0 && _y<=10) ++_y;
  if(facing==='South' && _y>=0 && _y<=10) --_y;
  if(facing==='East' && _x>=0 && _x<=10) ++_x;
  if(facing==='West' && _x>=0 && _x<=10) --_x;

}

const getFacing = () => facing;
const getPosition = () => {return {_x,_y}};

  return {turn_left, turn_right, advance, getFacing, getPosition}

  }
