// 转成Promise对象
function foo() {
  const obj = { name: 'haha1' }
  return new Promise(resolve => {
    resolve(obj)
  })
}

foo().then(res => {
  console.log('res', res)
})

// 类方法Promise.resolve
// 1.传入普通值
// const promise = Promise.resolve({ name: 'haha2' })
// 相当于
// const promise = new Promise((resolve, reject) => {
//   resolve({ name: 'haha' })
// })

// 2.传入promise
// const promise = Promise.resolve(new Promise((resolve, reject) => {
//   resolve(123)
// }))
// promise.then(res => {
//   console.log('res', res);
// })

// 3.传入thenable对象
const promise = Promise.resolve({
  then: function(resolve, reject) {
    resolve(456)
  }
})
promise.then(res => {
  console.log('res', res);
})
