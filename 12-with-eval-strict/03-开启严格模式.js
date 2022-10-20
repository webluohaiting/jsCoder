// 1.js文件开启严格模式
"use strict";

// message = 'hello world'
var message = 'hello world'
console.log(message);

// 静默错误
// '123'.name = 'abc'


function foo() {
  // 2.函数开启严格模式
  "use strict";
  true.foo = '123'
}

foo()