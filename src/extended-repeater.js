const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str= String (str);

  let repeatTimes=1;
      if('repeatTimes' in options)  repeatTimes= parseInt(options.repeatTimes, 10);
  let additionRepeatTimes=0; // сколько раз повторять  добавку
  
  let addition='';
      if('addition'  in options) { addition = String(options.addition);
        additionRepeatTimes=1;  // добавка есть. ее повторять отя бы раз 
      }

  if('additionRepeatTimes' in options)  additionRepeatTimes= parseInt(options.additionRepeatTimes, 10);
 

  
  let separator='+';
    if('separator' in options)  separator = String(options.separator);
  let additionSeparator='|';
    if('additionSeparator'  in options) additionSeparator = String(options.additionSeparator);
  
  let add_repeat='';
  if(additionRepeatTimes == 1) add_repeat=addition;
  else 
  if(additionRepeatTimes > 1) {
    add_repeat=addition; 
    for(let i=0; i<additionRepeatTimes-1; i++) add_repeat=add_repeat+additionSeparator + addition;
  }
  //console.log('--', additionRepeatTimes, '===', add_repeat);
  
  let tmp=str;
  if(additionRepeatTimes >0) tmp=str+add_repeat;
  
  for(let i=0; i<repeatTimes-1; i++) 
  {
  tmp=tmp+separator+str+add_repeat;
  console.log(i, tmp);
  }
  return tmp;
}

module.exports = {
  repeater
};
