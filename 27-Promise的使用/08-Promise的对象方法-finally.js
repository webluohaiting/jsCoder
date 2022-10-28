const promise = new Promise((resolve, reject) => {
  resolve('resolve message')
  // reject('reject message')
})

promise.then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
}).finally(() => { // 无论走resolve或者reject, 最终都会走finally
  console.log('finally code execute')
})

