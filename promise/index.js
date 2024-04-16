// In JavaScript, promises are objects representing the eventual completion or failure of an asynchronous operation. They are commonly used for handling asynchronous operations such as fetching data from a server, reading files, or any other operations that might take some time to complete
// syntax : new promise (resolve, reject)=>{asynchronous operation}

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkDogDone = true;
      if (walkDogDone) {
        resolve("you walk the dog");
      } else {
        reject("you did't walk the dog");
      }
    }, 5000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchendone = true;
      if (cleanKitchendone) {
        resolve("you clean the kitchen");
      } else {
        reject("you did't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeouttrashdone = false;
      if (takeouttrashdone) {
        resolve("you take out the trash");
      } else {
        reject("you did't take out the trash");
      }
    }, 500);
  });
}

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("you finished all"));
//   });
// });

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
