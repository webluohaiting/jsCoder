// 我们每个对象中都有一个[[prototype]]，这个属性可以称之为对象的原型（隐式原型）
var obj = { name: 'haha' }

var info = {}

// 1.原型的概念与表现形式

// 早期的ECMA是没有规范如何去查看[[prototype]]

// 给对象中提供了一个属性，可以让我们查看一下这个原型对象（浏览器提供）
// __ proto__
console.log(obj.__proto__);
console.log(info.__proto__);

// ES5之后提供的Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj));


// 2.原型的作用
// 当我们从一个对象中获取某一个属性时，他会触发[[get]]操作
// 1.在当前对象中去查找对应的属性，如果找到就直接使用
// 2.如果没有找到，那么会沿着她的原型链去查找[[prototype]]

// obj.age = 18

obj.__proto__.age = 20

console.log(obj.age);
