// Typescript is a javascript superset with static typing, new resources and of course,
// is compiled to javascript.

// What is a superset?
// Resuming, when we say that typescript is a superset, wher are basicly saying that
// the Typescript itsfel carries a lot of resources that are not included in the vanilla JS
// imagining a superset, in my mind, I like to imagine the Vanilla JS like a Operation System,
// and the typescript resources as programs that will allow me to make some functionalities
// that can only be made with this programs, like typescript static typing

// Compilation
// Typescript is compiled to Javascript to run, so when you finish coding in Ts with his amazing
// resources, it's code is compiled to javascript in the final, and this javascript compilation
// that is what is gonna be runned in the javascript interpreter (node or browser).

// Example of javascript function
function multiplyNumbersInJavascript(x, y) {
  return x * y;
}

const resultJavascript = multiplyNumbersInJavascript(10, [1, 2]);
console.log(resultJavascript); // NaN

// As you can see, the result of the function will be not a number,
// this means that the functionality cannot occur due the fact that
// the second parameter is a Array and not a Number, that is the data type
// that the function expects to receive.

// Now let's try to reply it, but using the typescript static typing instead

// Typescript
function multiplyNumbersInTypescript(x: number, y: number) {
  return x * y;
}

const resultTypescript = multiplyNumbersInTypescript(1, 2);

// Here as you can see, i cannot even put the wrong values in the second parameter as I did
// in the javascript example, due the fact that my IDE returns me the following message:
// Argument of type 'number[]' is not assignable to parameter of type 'number'.

// Resources

// Interfaces (Please read about type inference)
// One of the typescript resources is the use of interface:

interface results {
  result: number;
}

type CalculatorFn = (x: number, y: number) => number;

const mul: CalculatorFn = (x, y) => x * y;

const twoTimesTwo = mul(2, 2); // 4

// ENUM EXAMPLE (Read more about this after)

type Mobs = "Creeper" | "Zombie" | "Skeleton";

function whatIsYourFavoriteMinecraftMob(mob: Mobs) {
  return `Hmm, so your favorite mob is the ${mob}?`;
}

const favoriteMob = whatIsYourFavoriteMinecraftMob("Skeleton");
console.log(favoriteMob); // Skeleton
