const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 
//console.log(date);

  if(date === undefined) return 'Unable to determine the time of year!';
  if( typeof(date) !== "object")  throw new Error('Invalid date!'); 
  if( typeof(+date) !== "number")  throw new Error('Invalid date!');
  const seasons = new Map([
    [11, 'winter'],  [0, 'winter'],  [1, 'winter'],
    [2, 'spring'], [3, 'spring'], [4, 'spring'],
    [5, 'summer'], [6, 'summer'], [7, 'summer'],
    [8, 'autumn'], [9, 'autumn'], [10, 'autumn'],
  ]);
  
  try {    var tmp= date.getMonth();  }
  catch (e) {   throw new Error('Invalid date!'); }
  
  return seasons.get(tmp);
}

module.exports = {
  getSeason
};
