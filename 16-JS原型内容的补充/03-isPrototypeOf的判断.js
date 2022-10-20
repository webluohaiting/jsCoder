function Person() {}

var p = new Person()

// 检查对象原型链是否有对应原型
console.log(Person.prototype.isPrototypeOf(p)) // true



// 比较instanceof和isPrototypeOf
// 1.instanceof是传入对象和类型（构造函数）
console.log((p instanceof Person)); // true

var obj = {
  name: 'haha',
  age: 10
}
// 2.isPrototypeOf是传入对象与对象
var info = Object.create(obj)
console.log(obj.isPrototypeOf(info))
