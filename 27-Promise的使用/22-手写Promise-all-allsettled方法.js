const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'
// 工具函数
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
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        queueMicrotask(() => {
          this.onFulfilledFns.forEach(fns => {
            fns()
          })
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        queueMicrotask(() => {
          this.onRejectedFns.forEach(fns => {
            fns()
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
    onFulfilled = onFulfilled || (value => { return value }) // 在catch中onFulfilled为undefined,导致后面接的finally无法执行
    onRejected = onRejected || (err => { throw err }) // 如果then中第二个函数为undefined,抛出异常
    return new myPromise((resolve, reject) => {
      // 1.如果在pending的时候，直接resolve或者reject，那么在then的时候，状态已经确定，则直接执行回调函数
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      } else if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      } else if (this.status === PROMISE_STATUS_PENDING) {  
        // 2.如果在pending的时候，没有（或延迟了）resolve或者reject，则执行then的时候，还没确定状态。
        // 此时将成功回调和失败回调放到数组中，等状态确定了，在微任务中循环执行存储的数组函数
        this.onFulfilledFns.push(() => { // 利用闭包，使得this.onFulfilledFns里的数组函数可以使用resolve()
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    return this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  static resolve(value) {
    return new myPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new myPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    // 关键：什么时候执行resolve,什么时候执行reject
    return new myPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
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
            status: PROMISE_STATUS_FULFILLED,
            value: res
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          results.push({ 
            status: PROMISE_STATUS_REJECTED,
            reason: err
          })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }
}

const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 2000)
})

const p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve(333)
  }, 3000)
})

myPromise.all([p1, p2, p3]).then(res => {
  console.log('res', res);
}).catch(err => {
  console.log('err', err);
})

myPromise.allSettled([p1, p2, p3]).then(res => {
  console.log('res', res);
}).catch(err => {
  console.log('err', err);
})
