"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// void return type
function printResult(num) {
    console.log("Result: " + num);
}
// error, needs explicit return
function noReturn() {
}
function noReturn1() {
    return;
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// you can reassign, as it is `any`
combineValues = 5;
// Run time `TypeError`, TS can't detect this
// console.log(combineValues(4, 5))
// Fix for the above
var cv = Function;
cv = add;
// Error, can't reassign to other values than function
// cv = 5;
// but can reassign other funcitons
cv = printResult;
console.log(cv(5, 5));
// fix above issues
var combineVals;
combineVals = add;
// Error wrong function type
combineVals = printResult;
console.log(combineVals(25, 25));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(12, 12, function (result) {
    console.log(result);
});
