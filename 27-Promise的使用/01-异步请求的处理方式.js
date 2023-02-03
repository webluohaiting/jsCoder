// 这种回调的方式有很多弊端：
// 1.如果是自己封装的requestData，那么封装的时候必须自己设计好callback的名称
// 2.如果是别人封装的requestData，那么必须看文档或者看源码才能知道怎么使用

// requestData.js
function requestData(url,successCallback, failCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求的结果
    // url传入的是haha，请求成功
    if (url === 'haha') {
      // 成功
      let names = ['aaa', 'bbb', 'ccc']
      successCallback(names)
    } else { // 否则请求失败
      // 失败
      let errMessage = '请求失败，url错误'
      failCallback(errMessage)
    }
  }, 3000)
}


// main.js
requestData('haha', res => {
  console.log(res)
}, err => {
  console.log(err)
})


// 更好的方案
function requestData2() {
  return '承诺（promise）'
}

const res = requestData2()