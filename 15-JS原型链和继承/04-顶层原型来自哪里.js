var obj1 = {} // 创建一个对象

var obj2 = new Object() // 创建了一个对象

// 1.创建一个对象： var moni = {}
// 2.this指向：this = moni
// 3.原型赋值：moni.__proto__ = Object.prototype
// 4.返回对象：return moni

var obj = {
  name: 'haha',
  age: 20
}

var obj2 = {
  address: '北京市'
}

obj.__proto__ = obj2

console.log(obj.address); // obj.address => obj.__proto__.address(即obj2.address) => obj2.__proto__(即Object.prototype.address) => Object.__proto__(即null)

// 顶层Object.prototype
console.log(obj.__proto__)
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);

console.log(Object) // [Function: Object],本质是函数

console.log(Object.prototype) // [Object: null prototype] {}
console.log(Object.prototype.constructor) // [Function: Object]
console.log(Object.prototype.__proto__) // null

console.log(Object.prototype); // [Object: null prototype] {},属性不可枚举
console.log(Object.getOwnPropertyDescriptors(Object.prototype)) // 通过这种方式可以获取原型属性
