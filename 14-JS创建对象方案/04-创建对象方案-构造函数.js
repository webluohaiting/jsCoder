// 一般构造函数首字母大写（不是必须，便于区分）
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃东西')
  }
  this.running = function() {
    console.log(this.name + '在跑步')
  }
}

var p1 = new Person('张三', 18, 1.88, '广州市')
var p2 = new Person('李四', 38, 1.80, '北京市')
console.log(p1, p2)

console.log(p1.eating === p2.eating) // false
console.log(p1.running === p2.running) // false


// class Person {}只是构造函数的语法糖
