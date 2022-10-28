const promise = Promise.reject('rejected message')
// 相当于
const promise = new Promise((resolve, reject) => {
  reject('rejected message')
})

// 注意：与resolve不同，reject不分3种传入值的情况，直接走reject
promise.then(res => {
  console.log('res', res);
}).catch(err => {
  console.log('err', err);
})
