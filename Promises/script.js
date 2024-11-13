// THEORY
// PROMISE
// An object that manages asynchtonous operations(such as querying a database, fetching a file, gathering resources).
// We can wrap a promise object aroung an asynchronous code.
// The promise object promises to return a value in the future.
// So, the promise object will be either Resolved or Rejected in the future.

// new Promise((resolve, reject) => {asynchronous code})

// Examples

// 1.) Walk the dog
// 2.) Clean the kitchen
// 3.) Take out the trash

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen");
//     callback();
//   }, 1500);
// }

// function takenOutTrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash");
//     callback();
//   }, 2500);
// }

// Callback Hell
// So, to avoid the callabck hell, we'll use promises.
// By using the promise we don't need callbacks
// walkDog(() => {
//   cleanKitchen(() => {
//     takenOutTrash(() => {
//       console.log("All tasks are completed.");
//     });
//   });
// });

// IMPLEMENTING THE ABOVE CODE USING PROMISES
function walkDog() {
  return new Promise((resolve, reject) => {
    // Async code
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        // Do this if promise is resolved
        // resolve is the function that is called when the promise is resolved
        resolve("You walk the dog");
      } else {
        // If  the promise is rejected then we'll call the reject function
        // Reject simple means that the promise is unable to do what it was supposed to do.
        reject("You didn't take your dog to walk");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = false;
      if (cleanedKitchen) {
        resolve("You clean the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 1500);
  });
}

function takenOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You take out the trash");
        console.log("All tasks are completed");
      } else {
        reject("You didn't take out the trash");
        console.error("You were unable to complete your tasks");
      }
    }, 2500);
  });
}

// Using method chaining
// Value is what we provided as the argument in the resolve function

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  // Here we'll take the value from the cleanKitchen() and return the takenOutTrash()
  .then((value) => {
    console.log(value);
    return takenOutTrash();
  })
  // Here we'll take the value from the takeOutTrash() and log it
  .then((value) => {
    console.log(value);
    console.log("All tasks are completed.");
  })
  // If the promise is rejected then we'll catch the error
  // Here, the value of error is what we provided as the argument in the reject function
  .catch((error) => {
    console.error(error);
  });
