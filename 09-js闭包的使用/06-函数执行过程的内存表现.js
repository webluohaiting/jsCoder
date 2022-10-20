// 1.创建GO
// GO = {
//   foo: undefined,
//   test: undefined
// }
// 2.预解析,开辟fooObj，testObj空间
// fooObj = '0x100' = {
//   parentScope: GO,
//   foo函数执行体
// }
// testObj = '0x200' = {
//   parentScope: GO,
//   test函数执行体
// },
// GO = {
//   foo: '0x100',
//   test: '0x200'
// }
// 3.开始执行全局代码, 执行foo()语句
// 4.创建fooAO对象
// fooAO = {
//   name: undefined,
//   age: undefined
// }
// 5.入栈，执行foo函数体
// fooAO = {
//   name: 'foo',
//   age: 18
// }
// 6.foo执行完毕,出栈，fooAO不再引用，销毁
// 7.执行test()语句
// 8.创建testAO对象
// testAO = {
// 
// }
// 9.入栈，执行test函数体
// 10.打印test
// 11.test执行完毕,出栈，testAO不再引用，销毁
// 12.最终堆内存只剩下
// GO = {
//   foo: '0x100',
//   test: '0x200'
// }
// fooObj = '0x100' = {
//   parentScope: GO,
//   foo函数执行体
// }
// testObj = '0x200' = {
//   parentScope: GO,
//   test函数执行体
// }

function foo() {
  var name = 'foo'
  var age = 18
}

function test() {
  console.log('test');
}

foo()

test()
