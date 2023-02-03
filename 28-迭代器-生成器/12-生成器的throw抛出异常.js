function* foo() {
  console.log('代码开始执行');

  
  // yield value1
  try {
    const value1 = 100
    yield value1
  } catch(error) {
    console.log('捕获到异常情况', error);
  }
  
  const value2 = 200
  yield value2

  const value3 = 300
  yield value3

  console.log('代码执行结束');
}

const generator = foo()

console.log(generator.next()); // {value: 100, done: false}


// 1.如果没有try、catch捕获异常，则打印台直接抛出异常Uncaught undefined，无法往下执行代码
// 2.如果有捕获异常，则执行catch内容，并能往下执行代码
console.log(generator.throw('error message'));

console.log(generator.next());
console.log(generator.next());


// throw使用场景：
// const generator = foo()

// const result = generator.next()

// if (result !== 200) {
//   generator.throw('error message') // 可根据上一次执行结果，对下一次代码执行throw
// }
