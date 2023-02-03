// async function bar() {
//   console.log("22222")
//   return new Promise((resolve) => {
//     resolve()
//   })
// }

// async function foo() {
//   console.log("111111")

//   await bar()

//   console.log("33333")
// }

// foo()
// console.log("444444")
// 111111 => 22222 => 444444 => 33333
// 主线程先执行foo() => 打印1111 => await bar() => 打印2222 => 
// new Promise => await后面代码为then的回调函数，放入微任务暂不执行 => 打印主线程44444 => 执行微任务打印3333


async function async1 () {
  console.log('async1 start')
  await async2();
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)
 
async1();
 
new Promise (function (resolve) {
  console.log('promise1')
  resolve();
}).then (function () {
  console.log('promise2')
})

console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// 微任务：async1 end    promise2
// 宏任务：setTimeout