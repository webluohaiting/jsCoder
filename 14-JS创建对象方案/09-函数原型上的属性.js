function foo() {

}

console.log(foo.name)

// 1.原型中关于constructor属性
// 1.1 foo.prototype这个对象中有一个constructor属性
// 1.2 enumerable属性为false，所以不可枚举
// console.log(foo.prototype)
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// Object.defineProperty(foo.prototype, 'constructor', {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   value: 'haha'
// })

// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// 1.3 prototype.constructor = 构造函数本身
// 所以foo.prototype.constructor.prototype.constructor可以循环无限指向

// 2.原型可以添加自己的属性
// foo.prototype.name = 'jaja'
// foo.prototype.age = 20
// foo.prototype.height = 1.88
// foo.prototype.eating = function() {
//   console.log(foo.prototype.name + '在吃饭')
// }

// var f1 = new foo()
// console.log(f1.name, f1.age);

// 3.可以直接修改整个prototype对象
foo.prototype = {
  // constructor: foo, // 直接定义指向构造函数
  name: 'haha',
  age: 20,
  height: 1.88,
  eating: function() {
    console.log(foo.prototype.name + '在吃饭')
  }
}

var f2 = new foo()
console.log(f2.name)
f2.eating()

// 因为constructor中的enumerable为false，所以一般不直接定义
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo
})
