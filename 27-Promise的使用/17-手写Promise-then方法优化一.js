const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

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
            fns(this.value)
          })
          // this.onFulfilled(this.value)
          // console.log('resolve被调用');
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        queueMicrotask(() => {
          // this.onRejected(this.reason)
          this.onRejectedFns.forEach(fns => {
            fns(this.reason)
          })
          // console.log('reject被调用');
        })
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    // 1.如果在then调用的时候，状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    } else if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    } else if (this.status === PROMISE_STATUS_PENDING) {
      // 2.将成功回调和失败回调放到数组中
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const promise = new myPromise((resolve, reject) => {
  console.log('函数被直接调用了');
  
  resolve('fulfilled message')
  reject('rejected message')
})

promise.then(res => {
  console.log('res1', res);
}, err => {
  console.log('err1', err)
})

promise.then(res => {
  console.log('res2', res);
}, err => {
  console.log('err2', err)
})

// const promise = new Promise((resolve, reject) => {
//   resolve('fulfilled message')
// })

// 一秒后才将函数加入onFulfilledFns，
//  此时onFulfilledFns循环已经执行完毕，
//  所以延迟加入的函数不会执行
setTimeout(() => {
  promise.then(res => {
    console.log('res3', res);
  }, err => {
    console.log('err3', err)
  })
}, 1000)
