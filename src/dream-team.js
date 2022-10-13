const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof members !== "object") return false;
  if(!Array.isArray(members)) return false;
  
  let letters=[];
  for(let i=0; i<members.length; i++)
    {
      let item=members[i];
      //if(Array.isArray(item) && (typeof item[0]=== string)) item=item[0];
      if (typeof item !== 'string'  ) continue;
      let str=item.trim().toUpperCase();
      let tmp=str[0].match(/^[a-zA-Z]/);
      if(tmp[0]) letters.push(tmp[0]);
    }
return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};
