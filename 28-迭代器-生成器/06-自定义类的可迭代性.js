// class Person {

// }

// const p1 = new Person()
// const p2 = new Person()
// const p3 = new Person()

// for (const item of p1) {
//   console.log(item);
// }


// 案例：创建一个教室类，创建出来的对象都是可迭代对象
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  // 函数另一种赋值方式：
  // foo = () => {
  //   console.log('foo function')
  // }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      },
      return: () => {
        console.log('迭代器提前终止了')
        return { done: true, value: undefined } // 提前终止必须return done=true
      }
    }
  }
}

const classroom = new Classroom('3幢5楼205', '计算机教室', ['haha', 'aoao', 'heihei'])

classroom.entry('haha')
console.log(classroom);

for (const stu of classroom) {
  console.log(stu);
  if (stu === 'haha') break
}
