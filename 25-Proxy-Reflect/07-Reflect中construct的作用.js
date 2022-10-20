function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

const stu = new Student('haha', 20)
console.log(stu);
console.log(stu.__proto__ === Student.prototype);

// 需求：执行Student函数中的内容，但是返回一个Teacher类型
const teacher = Reflect.construct(Student, ['haha', 20], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype);
