const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let newlist=[];
if(names.length<=0) return [];
newlist[0]=names[0];

for (let i=1; i<names.length; i++) {
  if (newlist.indexOf(names[i]) >=0)  
          {
            let k=1;
            let newname= names[i]+'('+k+')';
            while (newlist.indexOf(newname) >=0) 
               {
                k++; newname= names[i]+'('+k+')';
              }
              newlist[i]=newname;
          }
  else        newlist[i]=names[i];
        }
  return  newlist;
}

module.exports = {
  renameFiles
};
