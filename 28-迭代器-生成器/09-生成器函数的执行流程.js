// // 当遇到yield时，则暂停函数的执行
// // 当遇到return时，则停止函数的执行
// function* foo() {
//   console.log(('函数开始执行'));


//   const value1 = 100
//   console.log('执行第一段代码', value1);
//   // return value1 // 遇到return，不再执行后面函数
//   yield value1 // 返回第一段执行结果（可以为值，表达式，函数执行）

//   const value2 = 200
//   console.log('执行第二段代码', value2);
//   yield

//   const value3 = 300
//   console.log('执行第三段代码', value3);
//   yield

//   console.log(('函数执行结束'));
//   return '123'
// }

// // generator本质上是一个特殊的iterator
// const generator = foo()

// console.log(generator.next()) // {value: 100, done: false}
// console.log(generator.next()) // {value: undefined, done: false}
// console.log(generator.next()) // {value: undefined, done: false}
// console.log(generator.next()) // {value: '123', done: true}


function* foo() {
  console.log('开始')
  
  const value1 = 100
  yield // 有无返回值
  
  const value2 = 200
  yield value2 // 有返回值
  
  const value3 = 300
  const n = yield value3 // 有返回值，并且保存下一段代码的参数n
  
  const value4 = 400 * n //  
  yield value4  // 有返回值
  
  console.log('结束')
}

const generator = foo()
console.log(generator.next()) // 执行到第一个yield，开始,{ value: undefined, deep: false }
console.log(generator.next()) // 执行到第二个yield， { value: 200, deep: false }
console.log(generator.next()) // 执行到第三个yield， { value: 300, deep: false }
console.log(generator.next(4)) // 执行到第四个yield， { value: 1600, deep: false }
console.log(generator.next()) // 结束， { value: undefined, deep: true}
  