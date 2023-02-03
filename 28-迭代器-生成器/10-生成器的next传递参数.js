// 1.生成器上的next方法可以传递参数
function* foo() {
  console.log(('函数开始执行'));

  const value1 = 100
  console.log('执行第一段代码', value1);
  const n = yield value1 // 上一段代码执行结束返回值n，为第二段代码next传入的参数
  console.log(n);

  const value2 = 200 * n
  console.log('执行第二段代码', value2);
  const m = yield value2

  const value3 = 300 * m
  console.log('执行第三段代码', value3);
  yield value3

  console.log(('函数执行结束'));
  return '123'
}

// generator本质上是一个特殊的iterator
const generator = foo()

console.log(generator.next()) // {value: 100, done: false}

// 第二段代码，第二次调用next执行，传入参数10
console.log(generator.next(10)) // {value: 2000, done: false}

console.log(generator.next(20)) // {value: 6000, done: false}
console.log(generator.next()) // {value: '123', done: true}
