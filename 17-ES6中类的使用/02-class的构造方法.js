// 类的声明
class Person {
  // 类的构造方法
  // 注意：一个类只能有一个构造方法

  // new执行过程：
  // 1.在内存中创建一个对象： var moni = {}
  // 2.将类的原型prototype赋值给创建出来的对象：moni.__proto__ = Person.prototype
  // 3.将对象赋值给函数的this：new绑定 this = moni
  // 4.执行函数体代码
  // 5.返回这个对象moni
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

var p1 = new Person('haha', 20)
var p2 = new Person('xixi', 30)

console.log(p1, p2);