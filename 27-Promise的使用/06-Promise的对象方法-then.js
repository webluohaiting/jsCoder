// Promise的对象方法
console.log(Object.getOwnPropertyDescriptors(Promise.prototype));


const promise = new Promise((resolve, reject) => {
  resolve('haha')
})

// 1.同一个promise可以被多次调用then方法
// 当resolve方法被回调时，所有then方法传入的回调函数都会被调用
// promise.then(res => {
//   console.log('res1:', res);
// })
// promise.then(res => {
//   console.log('res2:', res);
// })

// then方法本身也有返回值，返回值是一个新的Promise
// 2.then方法传入的回调函数是可以有返回值return

// 2.1 如果返回的是一个普通值，那么这个普通值会被作为一个新的Promise的resolve值
promise.then(res => {
  // 等同于return new Promise(resolve => { resolve(123) })
  return 'aaa'
}).then(res => { // 新Promise的then方法
  console.log(res); // aaa
  return 'bbb'
}).then(res => { // 新Promise的then方法
  console.log(res); // bbb
  // 无return，res即为undefined
})

// 2.2 如果我们返回的是Promise
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123)
    }, 3000)
  })
}).then(res => {
  console.log(res);
})

// 2.3如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
  return {
    then: function(resolve, reject) {
      resolve(111)
    }
  }
}).then(res => {
  console.log('res', res);
})
