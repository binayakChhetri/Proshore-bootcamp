// Complex data type in TypeScript

// A) enums
// A programmer can define a set of possible values for a variable using TypeScript’s complex type called enum.

// Defining an enum data type

// 1.) Numeric enums
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
