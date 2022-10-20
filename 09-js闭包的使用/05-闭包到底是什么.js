// 1.开辟GO空间，创建GO对象,预解析阶段，开辟foo空间， fn = undefined
// GO = {
//   String: '类',
//   setTimeout: '函数',
//   window: 'this',
//   foo: '0x100',
//   fn: undefined
// }
// 2.执行全局上下文阶段,执行语句var fn = foo(),执行foo()
// 3.foo入栈，创建foo的AO对象，预解析阶段，开辟bar空间, name = undefined
// fooAO = {
//   name: undefined,
//   bar: '0x200'
// }
// 4.执行函数上下文阶段，执行name = 'foo',return bar,即fn = '0x200'
// 5.foo出栈(fooAO不会被销毁，此时fn引用bar函数对象，而bar函数对象的作用域指向fooAO,fooAO还被引用，所以不会销毁)
// 6.执行fn(),即执行bar(),
// 7.foo入栈，创建bar的AO对象为{}
// 8.打印,根据作用域链，name在bar的AO对象中没找到，找到foo的AO对象为‘foo',最终打印'bar foo'
// 9.bar出栈，销毁barAO（此时内存保留着GO,fooAO,foo函数对象，bar函数对象）
// 10.执行完毕
// GO = {
//   String: '类',
//   setTimeout: '函数',
//   window: 'this',
//   foo: '0x100',
//   fn: '0x200' // 引用bar函数对象
// },
// foo函数对象 = {
//   parentScope: GO, // 引用GO
//   函数执行体
// },
// fooAO = {
//   name: 'foo',
//   bar: '0x200' // 引用bar函数对象
// },
// bar函数对象 = {
//   parentScope: fooAO, // 引用fooAO
//   函数执行体
// }

// 闭包两部分组成：函数+可以访问的自由变量
function foo() {
  var name = 'foo'
  function bar() {
    console.log('bar', name);
  }
  return bar
}

var fn = foo()
fn() // bar foo