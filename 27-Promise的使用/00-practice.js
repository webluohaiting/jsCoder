const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch(err) {
    reject(err)
  }
}

class myPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.fulfilledFns = []
    this.rejectedFns = []

    const resolve = value => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        // console.log('执行resolve');
        queueMicrotask(() => {
          this.fulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }
    const reject = reason => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        // console.log('执行reject');
        queueMicrotask(() => {
          this.rejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
      onFulfilled = onFulfilled || (value => { return value })
      onRejected = onRejected || (err => { throw err })
      if (this.status === PROMISE_STATUS_FULFILLED) {
        // try {
        //   const value = onFulfilled(this.value) // 执行then的回调函数后，return的信息,存储起来resolve
        //   resolve(value)
        // } catch(err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      } else if (this.status === PROMISE_STATUS_PENDING) {
        this.fulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.rejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFulfilled) {
    return this.then(onFulfilled)
  }

  static resolve(value) {
    return new myPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new myPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    return new myPromise((resolve, reject) => {
      const value = []
      promises.forEach(promise => {
        promise.then(res => {
          value.push(res)
          if (value.length === promises.length) {
            resolve(value)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allSettled(promises) {
    return new myPromise((resolve, reject) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({
            status: 'fulfilled',
            value: res
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          results.push({
            status: 'rejected',
            reason: err
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.forEach(promise => {
        // promise.then(res => {
        //   resolve(res)
        // }, err => {
        //   reject(err)
        // })
        // 简写
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises) {
    return new myPromise((resolve, reject) => {
      const reasons = []
      promises.forEach(promise => {
        promise.then(res => {
          resolve(res)
        }, err => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons, 'All promises were rejected'))
          }
        })
      })
    })
  }
}

// const promise = new myPromise((resolve, reject) => {
//   resolve('promise1成功')
//   // reject('promise1失败')
//   // throw 'promise1错误'
//   // setTimeout(() => {
//   //   resolve('promise1成功')
//   //   reject('promise1失败')
//   // }, 1000)
// })

// const p1 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('p1成功')
//     reject('p1失败')
//   }, 1000)
// })
// const p2 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('p2成功')
//     reject('p2失败')
//   }, 2000)
// })
// const p3 = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('p3成功')
//     reject('p3失败')
//   }, 3000)
// })

// // any方法
// // myPromise.any([p1, p2, p3]).then(res => {
// //   console.log(res);
// // }).catch(err => {
// //   console.log(err.errors);
// // })


// // race方法
// myPromise.race([p1, p2, p3]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// allSettled方法
// myPromise.allSettled([p1, p2, p3]).then(res => {
//   console.log(res);
// })


// all方法
// myPromise.all([p1, p2, p3]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// reject类方法
// myPromise.reject('失败').catch(err => {
//   console.log(err);
// })


// resolve类方法
// myPromise.resolve('成功').then(res => {
//   console.log(res);
// })

// finally
// promise.then(res => {
//   console.log('res1', res)
// }).catch(err => {
//   console.log('err1', err)
// }).finally(() => {
//   console.log('结束了')
//   return 11
// }).then(res => {
//   console.log('res1', res)
// })


// catch的
// promise.then(res => {
//   console.log('res1', res)
// }).catch(err => {
//   console.log('err1', err)
// }).then(res => {
//   console.log('res2', res)
//   throw '错误'
// }).catch(err => {
//   console.log('err2', err)
// })


// then
// promise.then(res => {
//   console.log('res1', res)
//   // return 'promise2成功'
//   throw 'promise2失败'
// }, err=> {
//   console.log('err1', err)
//   // return 'promise2成功'
//   throw 'promise2失败'
// }).then(res => {
//   console.log('res2', res)
//   return 'promise3成功'
// }, err=> {
//   console.log('err2', err)
//   return 'promise3成功'
//   // throw 'promise3失败'
// }).then(res => {
//   console.log('res3', res)
// }, err=> {
//   console.log('err3', err)
// })

// 原始promise测试
// new Promise((resolve, reject) => {
//   reject('失败')
// }).then(res => {
//   console.log('res1', res)
// }).catch(err => {
//   console.log('err1', err)
// }).then(res => {
//   console.log('res2', res)
//   throw '错误'
// }).catch(err => {
//   console.log('err2', err)
// }).finally(() => {
//   console.log('结束了');
//   return 11
// }).then(res => {
//   console.log('res1', res)
// })
// Promise.all([p1, p2, p3]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err)
// })

// Promise.any([p1, p2, p3]).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err.errors);
// })
myPromise.resolve().then(() => {
  console.log(0);
  return myPromise.resolve(4);
}).then((res) => {
  console.log(res)
})

myPromise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})