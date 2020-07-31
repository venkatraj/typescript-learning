function add(n1: number, n2: number) {
  return n1 + n2
}

// void return type
function printResult(num: number) {
  console.log(`Result: ${num}`)
}

// error, needs explicit return
function noReturn(): undefined {

}

function noReturn1(): undefined {
  return;
}

printResult(add(5, 12))

let combineValues;
combineValues = add;
// you can reassign, as it is `any`
combineValues = 5

// Run time `TypeError`, TS can't detect this
// console.log(combineValues(4, 5))

// Fix for the above

let cv = Function;
cv = add;
// Error, can't reassign to other values than function
// cv = 5;
// but can reassign other funcitons
cv = printResult
console.log(cv(5, 5))

// fix above issues

let combineVals: (a: number, b: number) => number;

combineVals = add
// Error wrong function type
combineVals = printResult

console.log(combineVals(25, 25))

function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(12, 12, (result) => {
  console.log(result)
})