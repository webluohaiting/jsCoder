// 原型式2
function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}

// 寄生式继承（工厂+原型）
function inheritPrototype(SubType, SuperType) {
  // SubType.prototype = Object.create(SuperType.prototype) // 原型式3
  SubType.prototype = createObject(SuperType.prototype) // 原型式2
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.running = function() {
  console.log('running');
}

Person.prototype.eating = function() {
  console.log('eating');
}

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score = score
}

// 但是由于未来可能有多种类型，所以封装为一个方法来实现继承
// Student.prototype = Object.create(Person.prototype)

// 打印时的类型会找原型对象的constructor，找不到则向上找,最终为Person
// 给Student加constructor是为了让最终对象显示类型为Student
// Object.defineProperty(Student.prototype, 'constructor', {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: Student
// })

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log('studying');
}

var stu1 = new Student('haha', 20, ['aa'], 12, 100)
console.log(stu1)
stu1.eating()
