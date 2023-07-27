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
  _resolveFn;
  _rejectFn;
  _catchFn;

  constructor(executor) {
    executor(MyPromise.resolve, MyPromise.reject);
  }

  // then and catch are class methods, different for each instance
  then(resolveFn, rejectFn) {
    // registering the functions for future use
    this._resolveFn = resolveFn;
    this._rejectFn = rejectFn;
    return this;
  }

  catch(catchFn) {
    // registering the functions for future use
    this._catchFn = catchFn;
    return this;
  }

  // resolve and reject are static class methods, same for all instances
  static resolve = (value) => {
    console.log("resolve this: ", this);
    if (MyPromise._resolveFn) this._resolveFn(value);
  };

  static reject = (reason) => {
    console.log("reject this: ", this);
    if (this._rejectFn) {
      this._rejectFn(reason);
    } else if (this._catchFn) {
      this._catchFn(new Error(reason));
    }
  };
}

// initialise
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const shouldSucceed = Boolean(Math.floor(Math.random() + 0.5));
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
    console.log("then value:", value);
  },
  (reason) => {
    console.log("then reason:", reason);
  }
).catch((error) => {
  console.log("catch error", error);
});
