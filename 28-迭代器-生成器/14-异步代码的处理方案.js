// requestData.js
function requestData(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url)
    }, 2000)
  })
}

// 需求：
// 1.url: 传入aaa => 返回aaa
// 2.url: 传入res + 'bbb' => 返回 aaabbb
// 3.url: 传入res + 'ccc' => 返回 aaabbbccc

// 1.第一种方案发送请求：多次回调
// 回调地狱
// requestData('aaa').then(res => {
//   console.log(res)
//   requestData(res + 'bbb').then(res => {
//     console.log(res);
//     requestData(res + 'ccc').then(res => {
//       console.log(res);
//     })
//   })
// })

// 2.第二种方案：Promise中then的返回值来解决
// requestData('aaa').then(res => {
//   return requestData(res + 'bbb')
// }).then(res => {
//   return requestData(res + 'ccc')
// }).then(res => {
//   console.log(res);
// })

// 3.第三种方案：Promise + generator 实现
function* getData() {
  const res1 = yield requestData('aaa')
  const res2 = yield requestData(res1 + 'bbb')
  const res3 = yield requestData(res2 + 'ccc')
  console.log(res3);
}

// 3.1 手动执行生成器函数
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       console.log(res);
//     })
//   })
// })

// 3.2 封装自动执行生成器函数
// function execGenerator(genFn) {
//   const generator = genFn()

//   // 递归
//   // function exec(res) {
//   //   generator.next(res).value.then(res => {
//   //     exec(res)
//   //   })
//   // }

//   // 递归完善代码
//   function exec(res) {
//     const result = generator.next(res)

//     if (result.done) return result.value

//     result.value.then(res => {
//       console.log(res);
//       exec(res)
//     })
//   }

//   exec()
// }


// execGenerator(getData)

// 3.3 第三方包co自动执行
// 作者TJ：co/n(nvm)/commander/express/koa
// const co = require('co')
// co(getData)


// 4.第四种方案：async/await，generator生成器的语法糖
// function requestData(url) {
//   return new Promise((resolve, reject) => {
//     // 模拟网络请求
//     setTimeout(() => {
//       // 拿到请求的结果
//       resolve(url)
//     }, 2000)
//   })
// }

async function getData() {
  const res1 = await requestData('aaa')
  const res2 = await requestData(res1 + 'bbb')
  const res3 = await requestData(res2 + 'ccc')
  console.log(res3);
}

getData()

// await requestData()会执行requestData(), 并且Promise.resolve(request中的return值)，后面代码为.then执行内容
// 此例中return为new Promise，resolve中传入的值为Promise时，按照新的Promise执行过程，所以拿到res1值为aaa
// await requestData('aaa')过程如下：
// Promise.resolve(new Promise((resolve, reject) => {
//   // 模拟网络请求
//   setTimeout(() => {
//     // 拿到请求的结果
//     resolve(url)
//   }, 2000)
// })).then(res1 => {
//   const res2 = await requestData(res1 + 'bbb')
//   const res3 = await requestData(res2 + 'ccc')
//   console.log(res3);
// })
