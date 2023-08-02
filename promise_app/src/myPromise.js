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
    let _resolveValue;
    let _rejectReason;
    let _shouldResolve = false;
    let _shouldReject = false;
    let _calledOnce = false;

    // then and catch are class methods, different for each instance
    this.then = (resolveFn, rejectFn) => {
      // registering the functions for future use
      _callbacks.push({ type: "resolve", fn: resolveFn });
      if (rejectFn) _callbacks.push({ type: "reject", fn: rejectFn });

      if (_shouldResolve) {
        _resolveValue = resolveFn(_resolveValue);
      }
      if (_shouldReject && rejectFn && !_calledOnce) {
        // after handling reject once, it will resolve everytime, further down the chain
        _resolveValue = rejectFn(_rejectReason);
        _calledOnce = true;
        _shouldReject = false;
        _shouldResolve = true;
      }

      return this;
    };

    this.catch = (catchFn) => {
      // registering the functions for future use
      _catchFns.push(catchFn);
      if (_shouldReject && !_calledOnce) {
        _rejectReason = catchFn(new Error(_rejectReason));
        _calledOnce = true;
      }
      return this;
    };

    // these resolve and reject methods are internal methods,
    // used to handle resolve / reject callbacks
    let resolveCallback = (value) => {
      _calledOnce = true;
      _resolveValue = value;
      _shouldResolve = true;

      _callbacks.reduce((prevReturn, currCallback) => {
        if (currCallback.type === "resolve") {
          return currCallback.fn(prevReturn);
        }
        return prevReturn;
      }, value);
    };

    let rejectCallback = (reason) => {
      _rejectReason = reason;
      _shouldReject = true;

      let rejectIdx = _callbacks.findIndex(
        (callback) => callback.type === "reject"
      );

      if (rejectIdx !== -1 && !_calledOnce) {
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
      }

      if (rejectIdx === -1 && _catchFns.length > 0) {
        _catchFns[0](new Error(reason));
        return;
      }
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
  resolve("12345");
  // reject("123");

  // setTimeout(() => {
  //   const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
  //   console.log("should succeed: ", shouldSucceed);
  //   if (shouldSucceed) {
  //     resolve("resolved");
  //   } else {
  //     reject("rejected");
  //   }
  // }, 500);
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

p.then(() => {
  console.log("separate then");
});
//
//
//
//

// const np = new Promise((resolve, reject) => {
//   reject("123");
//   resolve("12345");
//   //   setTimeout(() => {
//   //     const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
//   //     console.log("should succeed: ", shouldSucceed);
//   //     if (shouldSucceed) {
//   //       resolve("resolved");
//   //     } else {
//   //       reject("rejected");
//   //     }
//   //   }, 500);
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
//       return "rejected2";
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
