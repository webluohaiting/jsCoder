async function foo() {
  console.log('foo start~~~');

  console.log('中间代码~~~');

  console.log('foo end~~~');

  // 1.返回一个普通值：
  // return 123

  // 2.返回一个thenable:
  // return {
  //   then: function(resolve, reject) {
  //     resolve('haha')
  //   }
  // }

  // 3.返回一个新的Promise:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('heihei')
    }, 2000)
  })
}

console.log('script start');
// 异步函数的返回值一定是一个Promise
const promise = foo()
promise.then(res => {
  console.log('promise then function exec', res);
})

console.log('script end');
