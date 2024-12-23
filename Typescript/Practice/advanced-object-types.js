"use strict";
// Interfaces and Types
const me = {
    code: () => console.log("Headphones on. Coffee brewed. Editor open."),
    name: "Corrina",
    hobbies: ["Building rockets"],
};
me.code();
function getUserName(options) {
    if (options.firstName && options.lastName) {
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.username);
}
getUserName({
    firstName: "Mr.",
    lastName: "Oshiro",
    username: "hotelowner304",
});
getUserName({
    firstName: "Madeline",
    username: "mountainClimber",
});
