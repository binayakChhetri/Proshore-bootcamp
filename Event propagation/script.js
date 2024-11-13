// THEORY

// Event Bubbling and Capturing
// Event bubbling
// It is the propagation of the events from child to parent elements
// button -> div -> body -> html -> document

// Event capturing
// It is the propagation of the events from parent to child elements
// document -> html -> body -> div -> button

// Stop propagation, Immediate Propagation and Prevent default
// Stop propagation
// It stops the propagation of the events in the DOM tree.
// If event capturing is true, it stops the event propagation from parent to child elements.
// If event bubbling is true, it stops the event propagation from child to parent elements.

// Immediate Propagation
// Just like stop propagation it also allows to stop the propagation of the events in the DOM tree.
// In addition to it, it also stops any other event listeners from executing on the same element.

// PREVENT DEFAULT
// It allows us to prevent the default behaviour of the event.
// For example, if we have a form and button on it. On clickin the button, the form will be submitted (whcih is the default behaviour).
// On using prevent default that behaviour can be prevented.
// Also, behaviout of the anchor tag can be prevented using prevent default.

// Selecting the elements
const div = document.querySelector("div");
const clickBtn = document.querySelector("button");
const immediatePropagationBtn = document.querySelector("#immediate");

// EXAMPLES FOR EVENT BUBBLING
div.addEventListener("click", () => {
  console.log("Element div was clicked");
});

clickBtn.addEventListener("click", (e) => {
  console.log("Button was clicked");
  e.stopPropagation();
});

// EXAMPLES FOR EVENT CAPTURING

// div.addEventListener(
//   "click",
//   () => {
//     console.log("Element div was clicked");
//   },
//   true
// );

// Here we have added 3rd argument as true, which means the event will be captured. By default, it is false.
// This means we will listen to the event from parent to child elements
// Here, at first div will be clicked and then button will be clicked, unlike event bubbling where button(child element)
// will be clicked first and then div(parent element) will be clicked
// clickBtn.addEventListener(
//   "click",
//   () => {
//     console.log("Button was clicked");
//   },
//   true
// );

// Immediate Propagation Ecample
// immediatePropagationBtn.addEventListener("click", (e) => {
//   console.log("Clicked 1 time");
// });

// immediatePropagationBtn.addEventListener("click", (e) => {
//   console.log("Clicked 2 times");
// Here we've used stopImmediatePropagation().
// Meaning that even if we have applied multiple event listeners on the same element, it won't be handled from the next event listener.
// Will handle upto here, and won't go to the next event listener.
//   e.stopImmediatePropagation();
// });

// immediatePropagationBtn.addEventListener("click", (e) => {
//   console.log("Clicked 3 times");
// });
