"use strict";
function combine(input1, // type
input2, // union
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);
var combinedNames = combine('Venkat', 'Raj', 'as-text');
console.log(combinedNames);
