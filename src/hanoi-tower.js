const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnSpeed ) {

 // const n=BigInt(Math.pow (2, disksNumber)-1);
 // const speed=BigInt(turnSpeed);

const n=Math.pow (2, disksNumber)-1;
const speed=turnSpeed;
 
  return {'turns': n, 'seconds': Math.floor(n*3600/speed)}
  //return [Number(n), Number(n*3600n/speed)];
}

module.exports = {
  calculateHanoi
};
