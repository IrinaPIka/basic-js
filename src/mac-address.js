const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isHex(str) {
return Boolean(str.match(/^[0-9a-f]+$/i));
 }

function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr=n.split('-');
  if (arr.length !=6) return false;
  for(i=0; i<6; i++) {
    if(arr[i].length !=2) return false;
    if (isHex(arr[i]) == false)return false;
  }
return true;
}
module.exports = {
  isMAC48Address
};
