const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNS={};
  let tmp=[];
 let str='';

for (let i=0; i<domains.length; i++ ) {
  str='';
  tmp=domains[i].split('.');  
  console.log(tmp);

  for (let j=tmp.length-1; j>=0; j--)  {
    str=str+'.'+tmp[j];
    if (DNS.hasOwnProperty(str)) DNS[str]++; else DNS[str]=1;
    console.log(str);
    }
}
return DNS;
}

module.exports = {
  getDNSStats
};
