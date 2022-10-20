"use strict";

// 在严格模式下，自执行函数(默认绑定)会指向undefined
function foo() {
  console.log(this);
}

var obj = {
  name: 'obj',
  foo
}

window.foo() // window

foo() // undefined（不使用严格模式则为window）

obj.foo() // obj

var bar = obj.foo
bar() // undefined（不使用严格模式则为window）


// setTimeout内部定义时
// fakeWin.setTimeout = function(fn, time) { fakeWin.fn.apply(this) } // this指向fakeWin，即为win
setTimeout(function() {
  console.log(this) // window
}, 1000)
