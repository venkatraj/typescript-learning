// Same as `any`, you can assign any type to `unknown`
let userInput: unknown;

userInput = 5;
userInput = 'TS'

// But still different, can't assign `unknown` to other types
let userName: string
userName = userInput

// fix
if (typeof(userInput) === 'string') {
  userName = userInput
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code
  };
} 

generateError('An error occured', 500)