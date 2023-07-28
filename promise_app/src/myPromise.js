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
    let _resolveFn;
    let _rejectFn;
    let _catchFn;

    // then and catch are class methods, different for each instance
    this.then = (resolveFn, rejectFn) => {
      // registering the functions for future use
      _resolveFn = resolveFn;
      _rejectFn = rejectFn;
      return this;
    };

    this.catch = (catchFn) => {
      // registering the functions for future use
      _catchFn = catchFn;
      return this;
    };

    // these resolve and reject methods are internal methods,
    // used to handle resolve / reject callbacks
    let resolveCallback = (value) => {
      if (_resolveFn) _resolveFn(value);
    };

    let rejectCallback = (reason) => {
      if (_rejectFn) {
        _rejectFn(reason);
      } else if (_catchFn) {
        _catchFn(new Error(reason));
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
  setTimeout(() => {
    const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
    console.log("should succeed: ", shouldSucceed);
    if (shouldSucceed) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  }, 1500);
});

// register then and catch handlers
p.then(
  (value) => {
    console.log("then value: ", value);
  },
  (reason) => {
    console.log("then reason:", reason);
  }
).catch((error) => {
  console.log("catch error: ", error.message);
});
