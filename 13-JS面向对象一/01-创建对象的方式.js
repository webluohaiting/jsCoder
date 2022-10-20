// 创建一个对象，对某个人进行抽象（描述）
// 1.创建方式一：通过new Object()创建
var obj = new Object()
obj.name = 'haha'
obj.age = 18
obj.height = 1.88
obj.running = function() {
  console.log(this.name, '在跑步');
}

// 2.创建方式二：字面量方式
var info = {
  name: 'xixi',
  age: 30,
  height: 1.98,
  eating: function() {
    console.log(this.name, '在吃饭');
  }
}