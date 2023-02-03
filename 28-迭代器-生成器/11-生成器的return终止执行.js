// 1.生成器上的next方法可以传递参数
function* foo(num) {
  console.log(('函数开始执行'));

  const value1 = 100 * num
  console.log('执行第一段代码', value1);
  const n = yield value1 // 上一段代码执行结束返回值n，为第二段代码next传入的参数
  console.log(n);

  const value2 = 200 * n
  console.log('执行第二段代码', value2);
  const m = yield value2

  const value3 = 300 * m
  console.log('执行第三段代码', value3);
  yield

  console.log(('函数执行结束'));
  return '123'
}

// generator本质上是一个特殊的iterator
const generator = foo(10)

console.log(generator.next()) // {value: 1000, done: false}

// 调用return，则意味着提前终止生成器的执行，不会执行第二段代码，value为传入的参数值
console.log(generator.return(20)) // {value: 20, done: true}
console.log(generator.next(30)) // {value: undefined, done: true}

