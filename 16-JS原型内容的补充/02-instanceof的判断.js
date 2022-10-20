function inheritPrototype(subType, superType) {
  subType.prototype = Object.create(superType.prototype)
  Object.defineProperty(subType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: false,
    value: subType
  })
}

function Person() {

}

function Student() {

}

inheritPrototype(Student, Person)

var stu = new Student()

// 如果类型存在原型链上，返回true
console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
console.log(stu instanceof Object); // true
