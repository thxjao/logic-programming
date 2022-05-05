// Recommended to read: Programming Typescript / Boris Cherny

// About the boolean type

// The boolean type only allows two values that are: true | false

let value: boolean = true;

// Boolean !== boolean, and why? The Boolean that contains the first letter in uppercase is object type while the
// boolean in lower case is primitive type.

// Is recommended to use boolean while developing applications
// https://stackoverflow.com/questions/18953251/when-should-i-use-boolean-instead-of-boolean#:~:text=Generics.,Boolean%20instead%20of%20a%20boolean%20.

let doneTask: boolean = true;
let inProgressTask: boolean = false;

console.log(doneTask);
console.log(inProgressTask);
