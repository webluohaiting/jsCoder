var personObj = {
  running: function() {
    console.log('running');
  }
}

// 寄生式继承：原型式+工厂模式
function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log('studying')
  }
  return stu
}

var stuObj1 = createStudent('haha')
var stuObj2 = createStudent('xixi')
var stuObj3 = createStudent('aiai')

// 弊端：
// 1.跟工厂模式一样，无法知道类型
// 2.创建出来的stu类方法studying，会不断重复创建