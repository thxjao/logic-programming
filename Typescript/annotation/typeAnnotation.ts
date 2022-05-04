// ==> Variables [Type Annotations]
let studentName: string = "Joao Oliveira";
console.log(studentName);

// ==> Arrays [Type Annotations]
let animals: string[] = ["Bird", "Dog", "Dolphin"];
console.log(animals);

// ==> Objects [Type annotations]
let car: {
  name: string;
  year: number;
  price: number;
};

car = { name: "Toyota Yaris Sedan XS", year: 2019, price: 80000 };
console.log(car);

// ==> Functions [Type annotations]
function multiplyNumbers(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplyNumbers(1, 2));
