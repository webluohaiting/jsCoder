// 1.await跟上表达式
// function requestData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(111)
//     }, 2000)
//   })
// }
// async function foo() {
//   // await 表达式(Promise)
//   const res = await requestData() // 这里await相当于yield

//   console.log(res);
//   console.log('--------');

//   const res1 = await requestData()
//   console.log(res);
// }

// foo()


// 2.跟上其他值
async function foo() {
  // 2.1 普通值
  // const res = await 123
  // console.log('res:', res); // 123

  // 2.2 thenable值
  // const res = await {
  //   then: function(resolve, reject) {
  //     resolve(456)
  //   }
  // }
  // console.log('res:', res); // 456

  // 2.2 Promise对象
  const res = await new Promise((resolve, reject) => {
    resolve(789)
  })
  console.log('res:', res); // 789
}
foo()

// 3.reject值
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(111)
    }, 2000)
  })
}
async function foo() {
  const res1 = await requestData()
  console.log('res1', res1);
}

foo() // 报错，await其实就是Promise.resolve()，后面的代码为then的内容，走不到then，所以不打印res1，没有catch直接报错
// foo().catch(err=> { // 需用catch去捕获promise里的异常
//   console.log('err:', err);
// })
