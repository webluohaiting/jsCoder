// requestData.js
function requestData(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      // url传入的是haha，请求成功
      if (url === 'haha') {
        // 成功
        let names = ['aaa', 'bbb', 'ccc']
        resolve(names)
      } else { // 否则请求失败
        // 失败
        let errMessage = '请求失败，url错误'
        reject(errMessage)
      }
    }, 3000)
  })
}

const promise = requestData('haha')

promise.then(res => {
  console.log('请求成功', res)
}, err => {
  console.log('请求失败', err);
})


// 钩子函数：hook
// 回调函数：callback
function foo(fn) {
  fn()
}
function fn() {}