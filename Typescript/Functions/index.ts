// Complex data type in TypeScript

// A) enums
// A programmer can define a set of possible values for a variable using TypeScript’s complex type called enum.

// Defining an enum data type

// 1.) Numeric enums
// have a corresponding numeric value assigned to them
// This is an example of numeric enum because the first value is 0 and the rest are incremented by 1.
// By default, the values of an enum are numbers, but for strings enum we've to write it explicitly.
/*
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}
*/

// enum type can be used in a type annotation like any other type.
// Like this
// Here the petOnSale variable is of type Pet, which means it can only have one of the values defined in the Pet enum.
// let petOnSale: Pet = Pet.Hamster;

// We can also use enums to define arrays and tuples
/*
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

*/

// We can't add a value that is not in the enum, if tried it will give an error
// ordersArrayTS.push([Pet.Jerboa, 3]);

// 2.) String enums
// have a corresponding string value assigned to them
// String enums are much more strict
/* 
enum Pet {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}
*/

// let petOnSaleTS: Pet = Pet.Chinchilla;
/*
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];
*/

// we can't add a value that is not in the enum, if tried it will give an error
// ordersArrayTS.push(['HAMSTER', 1]);

// ordersArrayTS.push([Pet.Hamster, 1]); // can be done

// B.) Object Types
// Object types are used to define the shape of an object, i.e., the properties and their types.

// TypeScript places no restrictions on the types of an object’s properties. They can be enums,
// arrays, and even other object types!

// Add type annotations to the function parameters which are objects
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = "";
  output += "Happy Birthday " + personObject.name + "! ";
  output += "You are now " + personObject.age + " years old! ";
  output +=
    "Your birthday wish was to receive " +
    personObject.giftWish +
    ". And guess what? You will ";
  if (!personObject.success) {
    output += "not ";
  }
  output += "receive it! \n";
  console.log(output);
}

// Added type annotations to an array of objects.
let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];

// birthdayBabies.forEach(sayHappyBirthdayWithObject);

//  C.) Type Aliases
// With type aliases, we can customize the types in our program.
// They are simply the alternative tpye names that we choose for convenience.
// Type aliases are created using the type keyword.

type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"];
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"];

type Person = { name: string; age: number };
let aCompany: {
  companyName: string;
  boss: Person;
  employees: Person[];
  employeeOfTheMonth: Person;
  moneyEarned: number;
};

// D.) Function types
// Math Operations
function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
function multiply(a: number, b: number) {
  return a * b;
}
function divide(a: number, b: number) {
  return a / b;
}
function wrongAdd(a: number, b: number) {
  return a + b + "";
}

// Add your function type below:
type OperatorFunction = (num1: number, num2: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  );
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  );
  console.log("Now fill out this worksheet.");
}

// Call your functions below:
mathTutor(multiply);
// mathTutor(wrongAdd); // will produce an error
