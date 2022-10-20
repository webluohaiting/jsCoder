// GO = {
//   Person: 0x100,
//   p1: 0x200,
//   p2: 0x300
// }

// Person = {
//   parentScope,
//   prototype: 0x101,
//   函数执行体
// }

// 0x101:
// prototype = {
//   constructor: {}
// }

// p1 = {
//   __proto__: 0x101,
//   自身属性
// }

// p2 = {
//   __proto__: 0x101,
//   自身属性
// }

function Person() {

}

var p1 = new Person()
var p2 = new Person()

// p1.__proto__ === Person.prototype
// 所以2种方式改变name都是一样的结果

// p1.__proto__.name = 'haha'

// p2.__proto__.name = 'hehe'

Person.prototype.name = 'xixi'

console.log(p1.name, p2.name);