// Async/Await
// Async makes a function return a promise
// Await makes an async function wait for a promise

// Async and await work together i.e are dependent on each other

// By using async/await we can write async code in an asynchronous manner.
// Async doesn't have resolve or reject parameters
// Everything after await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't take your dog to walk");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = true;
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

async function doWork() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takenOutTrashResult = await takenOutTrash();
    console.log(takenOutTrashResult);
    console.log("All works are completed");
  } catch (error) {
    console.error(error);
  }
}

doWork();
