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

// Person原型对象 => Person实例对象（等于Student原型对象） => Student实例对象
Student.prototype = new Person()

Student.prototype.studying = function() {
  console.log(this.name + ' studying');
}

var stu1 = new Student('haha', ['aa'], 12)
var stu2 = new Student('xixi', ['xx'], 13)

stu1.friends.push('bb')
console.log(stu1, stu2);

// 强调：当前借用构造函数也是有弊端的
// 1.Person函数至少被调用两次（Person.call以及new Person()）
// 2.stu原型对象（即Student.prototype）上会多出一些无用的属性
console.log(Student.prototype);
console.log(Person.prototype);
