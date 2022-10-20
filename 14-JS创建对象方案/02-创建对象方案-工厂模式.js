// 工厂模式：工厂函数
function createPerson(name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height
  p.address = address
  p.eating = function() {
    console.log(this.name + '在吃东西~')
  }
  p.running = function() {
    console.log(this.name + '在跑步~')
  }
  return p
}

var p1 = createPerson('haha', 18, 1.88, '广州市')
var p2 = createPerson('xixi', 58, 1.88, '北京市')
var p3 = createPerson('aiai', 28, 1.88, '深圳市')

// 工厂模式的缺点：获取不到对象最真实的类型，都是Object类型，分类不明确
console.log(p1, p2, p3);
