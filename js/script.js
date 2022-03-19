"use strict"

let getPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

// .then / .catch method:

getPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise was finished!")); 


//   async / await + try...catch method:

async function getDone() {
    try {
      const result = await getPromise;
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Promise was finished!");
    }
}
  
getDone();
