// 1.开辟GO空间，创建GO对象,开辟foo空间
// GO = {
//   String: '类',
//   setTimeout: '函数',
//   window: 'this',
//   foo: '0x100',
//   fn: undefined
// }
// 2.执行全局上下文阶段,执行var fn = foo(),执行foo()
// 3.foo入栈，创建foo的AO对象，开辟bar空间
// fooAO = {
//   bar: '0x200'
// }
// 4.执行函数上下文阶段，执行return bar, 即fn = '0x200'
// 5.执行fn(),即执行bar(),
// 6.foo入栈，创建bar的AO对象为{}
// 7.打印'bar'
// 8.bar出栈，销毁
// 9.foo出栈，销毁
// 10.执行完毕

function foo() {
  function bar() {
    console.log('bar');
  }
  return bar
}

var fn = foo()
fn() // bar
