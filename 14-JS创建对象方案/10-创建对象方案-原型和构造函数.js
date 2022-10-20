function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}
// 方法为了复用，加到原型上
Person.prototype.eating = function() {
  console.log(this.name + '在吃饭')
}

var p1 = new Person('haha', 19, 1.88, '广州市')
var p2 = new Person('xixi', 30, 1.78, '上海市')

p1.eating() // this指向p1
p2.eating() // this指向p2
