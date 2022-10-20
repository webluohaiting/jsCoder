
/**
 * 1.代码解析，v8引擎内部会帮助我们在堆内存中创建一个全局对象（GlobalObject-> GO）
 * 2.运行代码
 *  2.1 v8为了执行代码，v8引擎内部会创建一个执行上下文栈（Execution Context Stack, ECStack）（函数调用栈）
 *  2.2 因为我们执行的是全局代码，为了全局代码能够正常执行，需要创建全局执行上下文（Global Execution Context, GEC），全局代码需要被执行时才会被创建
 *  2.3 在全局执行上下文中，会创建一个对象VO(Variable Object)，此时VO指向GO，开始执行全局的代码
 */
var globalObject = {
  String: '类',
  Date: '类',
  setTimeout: '函数',
  window: 'this(即globalObject)',
  name: undefined,
  num1: undefined,
  num2: undefined,
  result: undefined,
  foo: '0x100' // 16进制
}
// console.log(window);


var name = 'why'

foo(123)


/**
 * 3.代码解析
 *  3.1 在堆内存开辟一个存储函数的空间0x100（此时globalObject中foo: 0x100）
 *      存放作用域链[[scope]]:VO + parent scope(即GO)
 *      存放函数的执行体（代码块）
 *  3.2 在堆内存中创建一个活跃对象（Activation Object -> AO)
 * 4.运行代码
 *  4.1 v8为了执行代码，会创建一个函数执行上下文（FEC,Function Execution Context),入栈
 *  4.2 在函数执行上下文中，会创建一个对象VO(Variable Object)，此时VO指向AO，开始执行函数代码
 *  4.3 执行完成，弹出栈，并且销毁活跃对象AO
 */

function foo(num) {
  console.log(m);
  var m = 0
  var n = 1

  // var name = 'foo'
  console.log(name);

  // console.log('foo');
}


var num1 = 20
var num2 = 30
var result = num1 + num2

// console.log(result);


