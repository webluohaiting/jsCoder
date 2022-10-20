// 对象里面是有一个__proto__对象：隐式原型对象
var obj = {
  name: 'haha'
}

console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

// Foo是一个函数，那么他会有一个显式原型对象：prototype
// Foo.prototype = { constructor: Foo }

// Foo是一个对象，那么他会有一个隐式原型对象：__proto__
// Foo.__proto__ = Function.prototype = { constructor: Function }

function Foo() {

}
console.log(Foo.prototype === Foo.__proto__);
console.log(Foo.prototype.constructor);
console.log(Foo.__proto__.constructor);

