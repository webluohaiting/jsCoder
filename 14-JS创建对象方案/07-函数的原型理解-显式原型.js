function foo() {

}

// 函数也是一个对象
console.log(foo.__proto__); // 函数作为对象来说，它也是有[[prototype]]隐式原型

// 函数特殊：有一个显式原型属性，prototype
console.log(foo.prototype);


var f1 = new foo()
var f2 = new foo()

// 模拟构造函数创建对象过程
// function foo() {
//   moniObj.__proto__ = foo.prototype
//   var moniObj = {}
//   this = moniObj
//   return moniObj
// }

// 1.创建一个新对象
// 2.让新对象的__proto__指向foo的prototype
// 3.让this指向这个新对象
// 4.返回这个对象
// 5.所以最终创建的新对象的__proto__都会指向构造函数的prototype

console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);

