const _ = require('lodash');

// useing chunk
let nameList = ['md','Tazri','pentm','focasa','eren']

let chunkByTwoArray = _.chunk(nameList,2);
console.log('nameList = ',nameList);
console.log('chunkByTwoArray = ',chunkByTwoArray);

let chunkByFour = _.chunk(nameList,4);

console.log('chunkByFour = ',chunkByFour);

let mixedArray = [2,0,4,'This is string','','null',undefined,true,false];
let compactArray = _.compact(mixedArray);
console.log('mixedArray = ',mixedArray);
console.log('compactArray = ',compactArray);