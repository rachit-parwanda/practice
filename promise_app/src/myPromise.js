/*
SYNTAX:

const p = new Promise((resolve,  reject) => {
    // async code

    //if success
    resolve(value?)

    // if failure
    reject(reason?)
})

// register the then and catch handlers
p
.then((value?) => {
    //
}, (reason?) => {
    //
})
.catch((error) => {
    //
})
*/

class MyPromise {
  constructor(executor) {
    let _callbacks = [];
    let _catchFns = [];

    // then and catch are class methods, different for each instance
    this.then = (resolveFn, rejectFn) => {
      // registering the functions for future use
      _callbacks.push({ type: "resolve", fn: resolveFn });
      if (rejectFn) _callbacks.push({ type: "reject", fn: rejectFn });

      return this;
    };

    this.catch = (catchFn) => {
      // registering the functions for future use
      _catchFns.push(catchFn);
      return this;
    };

    // these resolve and reject methods are internal methods,
    // used to handle resolve / reject callbacks
    let resolveCallback = (value) => {
      _callbacks.reduce((prevReturn, currCallback) => {
        if (currCallback.type === "resolve") {
          return currCallback.fn(prevReturn);
        }
        return prevReturn;
      }, value);
    };

    let rejectCallback = (reason) => {
      let rejectIdx = _callbacks.findIndex(
        (callback) => callback.type === "reject"
      );

      if (rejectIdx === -1) {
        _catchFns[0](new Error(reason));
        return;
      }

      let foundReject = false;
      _callbacks.reduce((prevReturn, currCallback, idx) => {
        if (!foundReject && currCallback.type === "reject") {
          foundReject = true;
          return currCallback.fn(prevReturn);
        }

        if (foundReject && currCallback.type === "resolve") {
          return currCallback.fn(prevReturn);
        }

        return prevReturn;
      }, reason);
    };

    executor(resolveCallback, rejectCallback);
  }

  // these are static methods for "MyPromise", same for all instances
  // used to return a resolved / rejected promise
  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

// initialise
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
    console.log("should succeed: ", shouldSucceed);
    if (shouldSucceed) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  }, 500);
});

// register then and catch handlers
p.then((value) => {
  console.log("then value: ", value);
})
  .then(
    (value) => {
      console.log("then2 value: ", value);
      return "resolved2";
    },
    (reason) => {
      console.log("then2 reason:", reason);
      return "testing2";
    }
  )
  .then((value) => {
    console.log("then3 value: ", value);
  })
  .catch((error) => {
    console.log("catch error: ", error.message);
  });

//
//
//
//

// const np = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
//     console.log("should succeed: ", shouldSucceed);
//     if (shouldSucceed) {
//       resolve("resolved");
//     } else {
//       reject("rejected");
//     }
//   }, 500);
// });

// np.then((value) => {
//   console.log("then value: ", value);
//   return "resolved1";
// })
//   .then(
//     (value) => {
//       console.log("then2 value: ", value);
//       return "resolved2";
//     },
//     (reason) => {
//       console.log("then2 reason:", reason);
//       return "rejected1";
//     }
//   )
//   .then((value) => {
//     console.log("then3 value: ", value);
//   })
//   .catch((error) => {
//     console.log("catch error: ", error);
//   })
//   .catch((error) => {
//     console.log("catch2 error: ", error);
//   });
