function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {

    return result
  }
}

let number1 = 5;
const number2 = 2.8;
const showResult = true
const phrase = 'Result is '
 
const result = add(number1, number2, showResult, phrase)
// console.log(result) 