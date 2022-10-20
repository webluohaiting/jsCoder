function Person(name, friends) {
  this.name = name
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name + ' eating');
}

function Student(name, friends, sno) {
  // 此时的this相当于stu,通过调用Person函数，借用Person的函数体执行，给stu加上这些属性
  Person.call(this, name, friends)
  this.sno = sno
}

// 1.实例化Person进行赋值
// Person原型对象：存储公共属性和方法
// => Student原型对象 = Person实例对象1：存储Student类的公共属性和方法 
// => Student实例对象：存储实例化对象的属性和方法

// => Teacher原型对象 = Person实例对象2：存储Teacher类的公共属性和方法 
// => Teacher实例对象：存储实例化对象的属性和方法
Student.prototype = new Person()

// 2.将Person原型对象直接赋值，是不合理的。
// Person原型对象：存储公共属性和方法
// => Student原型对象 = Person原型对象1：Student类的公共属性和方法将会存到Person原型对象中去
// => Student实例对象：存储实例化对象的属性和方法

// => Teacher原型对象 = Person实例对象2：Teacher类的公共属性和方法将会存到Person原型对象中去
// => Teacher实例对象：存储实例化对象的属性和方法

// 这样所有类的公共属性和方法都会存到Person原型中去，不符合继承的理念
// Student.prototype = Person.prototype

Student.prototype.studying = function() {
  console.log(this.name + ' studying');
}

var stu1 = new Student('haha', ['aa'], 12)
console.log(stu1);
stu1.eating()
