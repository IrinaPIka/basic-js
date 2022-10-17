const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (sampleActivity== undefined) return false;
  if (typeof sampleActivity != "string") return false;
  if(!Number(sampleActivity))return false;
  if(sampleActivity >15 || sampleActivity <=0 ) return false;
  
// log sample / 15 = k.t
// k=5730/0.693
// t=Math.LN2(sampleActivity/15)/k;

 return Math.ceil(Math.log2(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD);
  
}

module.exports = {
  dateSample
};
