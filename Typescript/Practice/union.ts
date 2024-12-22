// Unions in Typecript

// In this example, string | number is a union that allows ID to be a string or a number.
// It’s more flexible than a single primitive type, but much more specific than the any type.
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

// printNumsAndStrings("hello!");
// printNumsAndStrings(459);

// Will throw an error
// printNumsAndStrings(true);

// Type narrowing
// Below example shows how to narrow down the type of a union
function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

// formatValue("Hiya");
// formatValue(42);

// Inferred union return types

// If the call is successful, the function will return a Book type describing a book. If the call fails,
// the function will return a string. getBook() can return a Book or string type,
// TypeScript infers the return type as the union Book | string.
// Since TypeScript can infer the function’s return type, there’s no need for us to manually define it.
/* function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}

getBook(); */

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

let userData: User | string = createUser();

console.log(userData);

// Unions and Arrays
//For instance, we can represent time in TypeScript with a number or a string type.
// If we had a list of dates in both types, we’d need an array that allows for string and number values.
// Unions are here to help.
/* 
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === "string") {
      return listing.toUpperCase();
    }

    if (typeof listing === "number") {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
]);

console.log(result);
 */

// Common key value pairs
// When we put type members in a union, TypeScript will only allow us to use the common methods and
// properties that all members of the union share.
// Take this code
// const batteryStatus: boolean | number = false;

// batteryStatus.toString(); // No TypeScript error
// batteryStatus.toFixed(2); // TypeScript error

// Since batteryStatus can be a boolean or a number,
// TypeScript will only allow us to call methods that both number and boolean share. They both share .toString(),
// so we’re good there. But, since only number has a .toFixed()
// method, TypeScript will complain if we try to call it.

// This rule also applies to type objects that we define. Take this code:
/* type Goose = {
  isPettable: boolean;
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
};

type Moose = {
  isPettable: boolean;
  hasHoofs: boolean;
};

const pettingZooAnimal: Goose | Moose = { isPettable: true };

console.log(pettingZooAnimal.isPettable); // No TypeScript error
console.log(pettingZooAnimal.hasHoofs); // TypeScript error
 */
// Like before, since .isPettable is on both Goose and Moose types, TypeScript will allow us to call it.
// But since .hasHoofs is only a property on Moose, we cannot call that method on pettingZooAnimal.
// Any properties or methods that are not shared by all of the union’s members won’t be allowed and will produce a TypeScript error.

// More example
/* type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
 */

// Unions with literal types

//We can use literal types with TypeScript Literal
// type unions are useful when we want to create distinct states within a program.

type Status = "idle" | "downloading" | "complete";

const downloadStatus = (status: Status) => {
  if (status === "idle") {
    console.log("Download");
  }

  if (status === "downloading") {
    console.log("Downloading....");
  }

  if (status === "complete") {
    console.log("Your download is complete!");
  }
};

downloadStatus("idle");
