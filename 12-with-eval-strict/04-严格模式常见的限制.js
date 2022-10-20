"use strict";

// 1.禁止意外创建全局变量
// message = 'hello world'

// console.log(message);

// function foo() {
//   age = 20
// }

// foo()
// console.log(age);

// 2.不允许函数有相同的参数名称
// function foo(x, y, x) {
//   console.log(x, y, x);
// }

// foo(10, 20, 30)

// 3.静默错误
// true.name = '123' // 错误语法

// NaN = '123' // 不允许对NaN赋值

// var obj = {}
// Object.defineProperty(obj, 'name', {
//   writable: false,
//   value: '123'
// })
// obj.name = 'aaa' // 不允许修改该属性

// 4.不允许使用原先八进制格式
// var num = 0123
// var num1 = 0o123
// var num2 = 0x100
// console.log(num); // 不允许以0开头
// console.log(num1);
// console.log(num1);

// 5.with语句不允许使用

// 6.eval函数不会向上引用变量了
// var jsString = "var message = 'hello world';console.log(message);"
// eval(jsString)
// console.log(message); // message is not defined
