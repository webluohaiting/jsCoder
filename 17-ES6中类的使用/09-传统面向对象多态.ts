// 传统的面向对象多态是有3个前提：
// 1.必须有继承（多态前提）
// 2.必须有重写（子类重写父类方法）
// 3.必须有父类引用指向子类对象

class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 200
  }
}

class Circle extends Shape {
  getArea() {
    return 300
  }
}

var r = new Rectangle()
var c = new Circle()

// 多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为（形态）不一样，那么就是多态的体现
function calcArea1(shape: Shape) {
  // 调用同一个方法（实际调用的是子类重写的不同的方法），但是返回不同的结果
  console.log(shape.getArea());
}

calcArea1(r)
calcArea1(c)

