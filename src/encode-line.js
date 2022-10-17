const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
if (str.length==0) return str;
let res='';
let n=1;
let ch=str[0];
for(let i=1; i<str.length; i++) {
    if(str[i]==ch) n++;
    else {
        if(n>1) res=res+String(n)+ch; else  res=res+ch; 
        n=1;
        ch=str[i];
    }
}
if(n>1) res=res+String(n)+ch; else  res=res+ch; 

return res;
}

module.exports = {
  encodeLine
};
