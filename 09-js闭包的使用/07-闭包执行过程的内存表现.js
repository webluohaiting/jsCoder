// 1.创建GO
// GO = {
//   foo: undefined,
//   fn: undefined
// }
// 2.预解析,开辟fooObj空间
// fooObj = '0x100' = {
//   parentScope: GO,
//   foo函数执行体
// }
// GO = {
//   foo: '0x100'
//   fn: undefined
// }
// 3.开始执行全局代码, 执行fn = foo()语句
// 4.创建fooAO对象
// fooAO = {
//   name: undefined,
//   age: undefined,
//   bar: undefined
// }
// 5.开辟barObj空间
// barObj = '0x200' = {
//   parentScope: fooAO,
//   bar函数执行体
// }
// fooAO = {
//   name: undefined,
//   age: undefined,
//   bar: '0x200'
// }
// 6.foo入栈，执行foo函数体
// fooAO = {
//   name: 'foo',
//   age: 18,
//   bar: '0x200'
// }
// 7.返回bar: '0x200',所以fn = '0x200' 
// GO = {
//   foo: '0x100'
//   fn: '0x200'
// }
// 8.foo执行完毕, 出栈，fooAO被barObj引用，barObj被fn引用，所以fooAO不销毁
// 9.执行fn()语句（即bar()）
// 10.创建barAO对象
// barAO = {
// 
// }
// 11.bar入栈，执行bar函数体,在barAO中没有找到name和age,根据parentScope找到fooAO中的name和age,打印foo, 18
// 12.bar执行完毕, 出栈，barAO不再引用，销毁
// 13.最终堆内存只剩下
// GO = {
//   foo: '0x100', // 引用fooObj
//   fn: '0x200' // 引用barObj
// }
// fooObj = '0x100' = {
//   parentScope: GO,
//   foo函数执行体
// }
// fooAO = {
//   name: 'foo',
//   age: 18,
//   bar: '0x200' // 引用barObj
// }
// barObj = '0x200' = {
//   parentScope: fooAO, // 引用fooAO
//   test函数执行体
// }
function foo() {
  var name = 'foo'
  var age = 18

  function bar() {
    console.log(name);
    console.log(age);
  }
  return bar
}

var fn = foo()
fn()
console.log(window);
