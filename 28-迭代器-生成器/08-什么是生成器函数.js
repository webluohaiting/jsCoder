// 生成器：function*
// 作用：用于临时暂停函数代码的执行
function* foo() {
  console.log(('函数开始执行'));


  const value1 = 100
  console.log('执行第一段代码', value1);
  yield

  const value2 = 200
  console.log('执行第二段代码', value2);
  yield

  const value3 = 300
  console.log('执行第三段代码', value3);
  yield

  console.log(('函数执行结束'));
}

// 调用生成器函数时，会给我们返回一个生成器对象
const generator = foo()

// 开始执行
generator.next() // 开始，第一段
console.log('---------');
generator.next() // 第二段
generator.next() // 第三段
console.log('---------');
generator.next() // 结束
