/** 
 * 思路：sum.hycall('abc', 10, 20)
 * 1.原型添加方法：在Function原型上添加hycall方法，使得所有函数都能调用该方法
 * 2.自动执行原始函数：在hycall获取this(fn = this)，此时因为隐式调用，this=》sum,所以fn == sum,执行fn()等同于sum()
 * 3.改变函数this指向：接收第一个参数thisArg = 'abc'，要让sum的this指向'abc',只需要thisArg.fn()
 * 4.                 因为不确定thisArg的类型，所以需要先将thisArg转成对象类型，Object(thisArg),如果为null或者undefined，则为window
 * 5.                 thisArg中没有fn，需要先赋值，thisArg.fn = fn,然后thisArg.fn()，使用完再删除属性delete thisArg.fn
 * 6.处理传入的剩余参数：用...args接收，在执行thisArg.fn(...args)传入
 * 7.返回结果：最后将执行结果返回result = thisArg.fn(...args); return result
 * */

// 给所有的函数添加一个hycall的方法
Function.prototype.hycall = function(thisArg, ...args) {
  console.log('hycall被执行了');
  // 1.获取需要被执行的函数
  var fn = this // this指向调用hycall的函数（隐式调用），所以fn = foo

  // 2.将thisArg转成对象类型(Object()可以将数字，字符，布尔都转成对应的对象)
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

  thisArg.fn = fn
  var result = thisArg.fn(...args) // 通过隐式调用，使得fn(即foo)的this指向thisArg(即传入的第一个参数)
  delete thisArg.fn
  return result
}

function foo() {
  console.log('foo被执行了', this);
}

function sum(num1, num2) {
  console.log('sum被执行了', this);
  return num1 + num2
}

// 系统函数call方法
// foo.call() // 执行foo函数
// foo.call('abc') // 传参，参数成为foo()的this指向对象

// 自己实现的函数hycall方法
// foo.hycall('abc')
foo.hycall(null)
// sum.hycall()
var result = sum.hycall(null, 10, 20)
console.log(111, result);
