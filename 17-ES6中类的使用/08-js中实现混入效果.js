class Person {

}

class Runner {
  running() {

  }
}


function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running');
    }
  }
  return NewClass
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating');
    }
  }
}

// js只支持单继承
class Student extends Person {

}

// 通过方法去继承类实现混入效果
// 但是只能继承方法，不能实现继承属性
var NewStudent = mixinEater(mixinRunner(Student))
var ns = new NewStudent()
ns.running()
ns.eating()
