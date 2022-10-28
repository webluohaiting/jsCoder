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
    return new myPromise((resolve, reject) => {
      // 1.如果在pending的时候，直接resolve或者reject，那么在then的时候，状态已经确定，则直接执行回调函数
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const value = onFulfilled(this.value)
        //   resolve(value)
        // } catch(err) {
        //   reject(err)
        // }
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      } else if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try { // rejected状态下return,也是走resolve()
        //   const reason = onRejected(this.reason)
        //   resolve(reason)
        // } catch(err) { // 只有rejected状态下throw异常，才会走reject()
        //   reject(err)
        // }
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      } else if (this.status === PROMISE_STATUS_PENDING) {  
        // 2.如果在pending的时候，没有（或延迟了）resolve或者reject，则执行then的时候，还没确定状态。
        // 此时将成功回调和失败回调放到数组中，等状态确定了，在微任务中循环执行存储的数组函数
        this.onFulfilledFns.push(() => { // 利用闭包，使得this.onFulfilledFns里的数组函数可以使用resolve()
          // try {
          //   const value = onFulfilled(this.value)
          //   resolve(value)
          // } catch(err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedFns.push(() => {
          // try {
          //   const reason = onRejected(this.reason)
          //   resolve(reason)
          // } catch(err) {
          //   reject(err)
          // }
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
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

// 1.同一个promise多次调用then的情况
// promise.then(res => {
//   console.log('res1', res);
// }, err => {
//   console.log('err1', err)
// })

// promise.then(res => {
//   console.log('res2', res);
// }, err => {
//   console.log('err2', err)
// })

// // const promise = new Promise((resolve, reject) => {
// //   resolve('fulfilled message')
// // })

// // 一秒后才将函数加入onFulfilledFns，
// // 此时onFulfilledFns循环已经执行完毕，
// // 所以延迟加入的函数不会执行
// setTimeout(() => {
//   promise.then(res => {
//     console.log('res3', res);
//   }, err => {
//     console.log('err3', err)
//   })
// }, 1000)

// 2.同一个promise进行链式调用then的情况
promise.then(res => {
  console.log('res4', res);
  // return '链式调用success'
  throw new Error('链式调用error')
}, err => {
  console.log('res4', err)
  // return '链式调用error'
  throw new Error('链式调用error')
}).then(res => {
  console.log('链式调用res', res);
}, err => {
  console.log('链式调用err', err)
}).then(res => {
  console.log('链式调用res', res);
}, err => {
  console.log('链式调用err', err)
})
