var obj = {
  name: 'haha',
  age: 18
}

// 1.原型式继承函数-创建对象
function createObject(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

// 2.原型式继承函数-创建构造函数
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}

// var info = createObject1(obj)
// var info = createObject2(obj)

// 3.Object.create()
// Object.create方法会直接将传入对象作为实例对象的原型
var info = Object.create(obj)

console.log(info);
console.log(info.__proto__)
