// 多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为（形态）不一样，那么就是多态的体现
function calcArea(foo) {
  console.log(foo.getArea())
}

var obj1 = {
  name: 'haha',
  getArea() {
    return 1000
  }
}

class Person {
  getArea() {
    return 100
  }
}

var p = new Person()

// 两个不同对象同时调用calcArea方法，得到不同的结果，符合多态定义
calcArea(obj1)
calcArea(p)

function sum(m, n) {
  return m + n
}

// 同时调用sum方法，一个是数字相加，一个是字符串相加，形态不同，得到不同的结果，符合多态定义
sum(1, 2)
sum('aaa', 'bbb')