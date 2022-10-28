// const promise = new Promise((resolve, reject) => {
//   resolve()
//   // reject('reject status')
//   // throw new Error('rejected status')
// })

// 1.当executor抛出异常是，也会调用错误（拒绝）捕获的回调函数
// promise.then(undefined, err => {
//   console.log('err1:', err)
// })

// 2.通过catch方法来传入错误（拒绝）捕获的回调函数
// promise/a+规范
// promise.catch(err => {
//   console.log('err2:', err)
// })

// promise.then(res => {
//   return 111 // 产生一个新的newPromise
// }).catch(err => { // 但是catch针对的是原始的promise，而不是这个新的newPromise
//   console.log('err3', err);
// })

// promise.then(res => { // 如果promise走的是resolve
//   return new Promise((resolve, reject) => { // 产生一个新的newPromise，如果返回一个promise的reject,会继续走后面的catch
//     reject('错误信息')
//   })
//   // throw new Error('error message') // 或者通过throw抛出异常，也会走catch
// }).catch(err => { // 则catch捕获的是新的newPromise的异常
//   console.log('err4', err); // 错误信息
// })


// 3.拒绝捕获的问题
// const promise = new Promise((resolve, reject) => {
//   reject('123')
//   throw new Error('456')
//   // resolve()
// })
// promise.catch(err => {
//   console.log('err1', err);
// })

// promise.then(res => { // then方法中没有对reject抛出拒绝消息进行处理，所以会报错
//   console.log(123);
// })


// // 处理方法1
// promise.then(res => {

// }, err => {
//   console.log('err2', err);
// })

// // 处理方法2
// promise.then(res => {

// }).catch(err => {
//   console.log('err3', err);
// })


// 4.catch方法的返回值
const promise = new Promise((resolve, reject) => {
  reject('111')
})

promise.then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err);
  return 'catch return value' // return new Promise((resolve, reject) => resolve('catch return value'))
}).then(res => {
  console.log('res result:', res) // 最终catch里的return，会走这里
}).catch(err => {
  console.log('err result:', err)
})