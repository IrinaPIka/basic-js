const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=String(n).split('');
  let tmp=[];
  let str='';

  for (let i=0; i<arr.length; i++)    {
    str='';
    for (let j=0; j<arr.length; j++)  if (i!=j) str=str+arr[j];
    tmp[i]=Number(str);
   }
 
  return Math.max.apply(null, tmp);
}

module.exports = {
  deleteDigit
};
