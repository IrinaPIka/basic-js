const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

function sortByHeight( arr ) {
    let clone = arr.slice(0);
    let n=0;
  
    
     clone= clone.sort(compare);
     console.log("clone: ",clone);

     while(clone[n]=='-1' && n<clone.length) n++;
  
    for(i=0; i<arr.length; i++)  
    {
      if(arr[i]=='-1') continue;
      arr[i]=clone[n]; n++;
    }
  
  return arr;
}

module.exports = {
  sortByHeight
};
