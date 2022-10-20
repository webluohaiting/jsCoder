'use strict'; // 严格模式下不允许使用with语句

var message = 'hello world'

console.log(message);

// function foo() {
//   function bar() {
//     console.log(message);
//   }
//   bar()
// }

// with语句：可以形成自己的作用域
var obj = { name: 'obj', age: 18, message: 'obj message' }

function foo() {
  function bar() {
    with(obj) { // 会现在obj里找message,找不到才到barAO => fooAO => GO
      console.log(message);
      console.log('------');
    }
  }
  bar()
}

foo()