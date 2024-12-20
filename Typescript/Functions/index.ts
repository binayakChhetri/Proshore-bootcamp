// Complex data type in TypeScript

// 1.) enums
// A programmer can define a set of possible values for a variable using TypeScript’s complex type called enum.

// Defining an enum data type
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

// enum type can be used in a type annotation like any other type.
// Like this
// Here the petOnSale variable is of type Pet, which means it can only have one of the values defined in the Pet enum.
let petOnSale: Pet = Pet.Hamster;

// We can also use enums to define arrays and tuples
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

// We can't add a value that is not in the enum, if tried it will give an error
// ordersArrayTS.push([Pet.Jerboa, 3]);
