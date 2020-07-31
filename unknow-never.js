"use strict";
// Same as `any`, you can assign any type to `unknown`
var userInput;
userInput = 5;
userInput = 'TS';
// But still different, can't assign `unknown` to other types
var userName;
userName = userInput;
// fix
if (typeof (userInput) === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('An error occured', 500);
