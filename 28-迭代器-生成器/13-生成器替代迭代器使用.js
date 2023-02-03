// 迭代器
// function createArrayIterator(arr) {
//   let index = 0
//   return {
//     next: function() {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] }
//       } else {
//         return { done: true, value: undefined }
//       }
      
//     }
//   }
// }

// const names = ['aaa', 'bbb', 'ccc']
// const iterator = createArrayIterator(names)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 生成器替代迭代器案例分析
// 1.案例一：数组迭代
function* createArrayIterator(arr) {
  // 1.1 通过yield本身特性实现return{ done, value }
  // let index = 0
  // yield arr[index++] // yield本身就是返回{ done: false, value: arr[index++] }
  // yield arr[index++]
  // yield arr[index++]
  
  // 1.2 for循环简化
  // for (const item of arr) {
  //   yield item
  // }

  // 1.3 yield*(for循环的语法糖), 后面需要跟上一个可迭代对象
  yield* arr
}

const names = ['aaa', 'bbb', 'ccc']
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

// 2.案例二：数字范围迭代
// 创建一个函数，这个函数可以迭代一个范围内的数字，比如迭代10-20的数字
function* createRangeIterator(start, end) {
  // let index = start
  // return {
  //   next: function() {
  //     if (index < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }

  let index = start
  while (index < end) {
    yield index++
  }
}

const rangeIterator = createRangeIterator(10, 13)

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());


// 3.案例三：class类
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
  foo = () => {
    console.log('foo function')
  }

  // 普通迭代器写法：
  // [Symbol.iterator]() {
  //   let index = 0
  //   return {
  //     next: () => {
  //       if (index < this.students.length) {
  //         return { done: false, value: this.students[index++] }
  //       } else {
  //         return { done: true, value: undefined }
  //       }
  //     },
  //     return: () => {
  //       console.log('迭代器提前终止了')
  //       return { done: true, value: undefined } // 提前终止必须return done=true
  //     }
  //   }
  // }

  // 生成器写法：
  // [Symbol.iterator] = function* () {
  //   yield* this.students
  // }

  *[Symbol.iterator]() { // 生成器*写到前面
    yield* this.students
  }
}

const classroom = new Classroom('3幢5楼205', '计算机教室', ['haha', 'aoao', 'heihei'])

// classroom.foo()
// classroom.entry('haha')
// console.log(classroom);

for (const stu of classroom) {
  console.log(stu);
}

