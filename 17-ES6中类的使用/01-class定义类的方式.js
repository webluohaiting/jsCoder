// 1.类的声明
class Person {

}

// 2.类的表达式(少用)
var Animal = class {

}

// 类的特性
console.log(Person.prototype); // Person原型
console.log(Person.prototype.__proto__); // 顶层Object
console.log(Person.prototype.constructor); // class Person

console.log(typeof Person); // function

var p = new Person()
console.log(p.__proto__ === Person.prototype);