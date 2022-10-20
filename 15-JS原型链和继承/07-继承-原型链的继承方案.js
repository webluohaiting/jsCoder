// 父类：公共属性和方法
function Person() {
  this.name = 'why'
  this.friends = []
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating');
}

// 子类：特有属性和方法
function Student() {
  this.sno = '111'
}

// 创建一个Person对象，让Student的原型对象指向这个Person对象，此时Student的原型链包括Person的原型
Student.prototype = new Person()

Student.prototype.studying = function() {
  console.log(this.name + ' studying');
}

// 未改变指向时
// var stu = new Student()
// console.log(stu.name); // undefined
// stu.eating() // 报错

// 改变指向时
var stu = new Student()
console.log(stu.name); // why
stu.eating() // why studying




// 原型链实现继承的弊端：
// 1.打印stu对象，继承的属性是看不到的
console.log(stu); // { sno: 111 }

// 2.创建出来两个stu对象，引用型的继承属性会相互影响
var stu1 = new Student()
var stu2 = new Student()

// 不会相互影响
stu1.name = 'haha'

console.log(stu1.name); // haha
console.log(stu2.name); // why

// 引用型数据会相互影响
stu1.friends.push('heihei')

console.log(stu1.friends); // ['heihei']
console.log(stu2.friends); // ['heihei']

// 3.在前面实现过程中，都没有传递参数
var stu3 = new Student('haha', 12)
// 此时处理name的逻辑在Person构造函数里，这样传递无法处理

console.log(333, Person.prototype);