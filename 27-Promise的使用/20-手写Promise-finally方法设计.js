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
}

const promise = new myPromise((resolve, reject) => {
  // console.log('函数被直接调用了');
  // setTimeout(() => {
  //   resolve('fulfilled message')
  // }, 3000)
  resolve('fulfilled message')
  // reject('rejected message')
  // throw new Error('promise抛出异常')
})
promise.then(res => {
  console.log('res', res);
  return 111
}).catch(err => {
  console.log('err', err);
}).finally(() => {
  console.log('finally');
}).then(res => {
  console.log('res', res);
})

// new Promise((resolve, reject) => {
//   resolve('fulfilled message')
// }).then(res => {
//   console.log('res', res)
// }).finally(() => {
//   console.log('finally')
//   return 11
// }).then(res => {
//   console.log('res', res)
// })
