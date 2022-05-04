// Basic Types

//? What is type annotation?

// Typescript is a high typed language, annotation isn't necessary, but is fundamental to help the compiler
// to check the typing.

// let nomeVariavel: TypeAnnotation = valor;

function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}

// Here as you can see the value received by this function have the annotation of number.
// Is good to remember that isn't something "must do", but by not using the annotation will probably be losing one of
// the most important typescript benefits.
