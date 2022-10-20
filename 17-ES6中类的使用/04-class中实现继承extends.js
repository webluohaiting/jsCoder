class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + ' eating');
  }
  running() {
    console.log(this.name + ' running');
  }
  personMethod() {
    console.log('处理逻辑1');
    console.log('处理逻辑2');
    console.log('处理逻辑3');
  }
  static staticMethod() {
    console.log('父类静态方法');
  }
}

// Student成为子类（也叫派生类）
class Student extends Person {
  // js引擎在解析子类的时候就有要求，如果我们有实现继承
  // 那么子类的构造方法中，在使用this之前，必须调用super()
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }
  studying() {
    console.log(this.name + ' studying')
  }
  // 方法的重写
  running() {
    console.log('Student ' + this.name + ' running')
  }
  // 重写personMethod方法
  personMethod() {
    // 通过super复用父类的方法
    super.personMethod()

    console.log('处理逻辑4');
    console.log('处理逻辑5');
    console.log('处理逻辑6');
  }
  static staticMethod() {
    super.staticMethod()
    console.log('子类静态方法');
  }
}

var stu = new Student('aoao', 10, 20)

console.log(stu);

stu.eating()
stu.running()
stu.personMethod()
Student.staticMethod()

console.log(Object.getOwnPropertyDescriptors(stu))
console.log(Object.getOwnPropertyDescriptors(stu.__proto__)); // sno, studying()
console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__)); // name, age, eating(), running()

