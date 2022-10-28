const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        setTimeout(() => {
          this.value = value
          this.onFulfilled(this.value)
          console.log('resolve被调用');
        }, 0)
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason)
          console.log('reject被调用');
        })
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    // if (this.status === PROMISE_STATUS_FULFILLED) {
    //   onFulfilled(this.value)
    // } else if (this.status === PROMISE_STATUS_REJECTED) {
    //   onRejected(this.reason)
    // }
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
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
