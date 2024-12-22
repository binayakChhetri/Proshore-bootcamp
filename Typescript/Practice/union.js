"use strict";
// Unions in Typecript
// In this example, string | number is a union that allows ID to be a string or a number.
// It’s more flexible than a single primitive type, but much more specific than the any type.
function printNumsAndStrings(statement) {
    console.log(`ℹ️ LOG:: ${statement}`);
}
// printNumsAndStrings("hello!");
// printNumsAndStrings(459);
// Will throw an error
// printNumsAndStrings(true);
// Type narrowing
// Below example shows how to narrow down the type of a union
function formatValue(value) {
    // Write your code here
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
function createUser() {
    const randomChance = Math.random() >= 0.5;
    if (randomChance) {
        return { id: 1, username: "nikko" };
    }
    else {
        return "Could not create a user.";
    }
}
let userData = createUser();
console.log(userData);
const downloadStatus = (status) => {
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
