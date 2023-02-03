// 数组
const names = ['aaa', 'bbb', 'ccc']

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next: function() {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

const iterableObj = {
  names: ['aaa', 'bbb', 'ccc'],
  [Symbol.iterator]: function() {
    // console.log(this)
    let index = 0
    return { // 返回一个迭代器
      // 此处使用箭头函数，让this指向依赖于上层作用域，即[Symbol.iterator]的this指向
      // 不能使用function，因为this指向的是iterator对象
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// iterableObj就是一个可迭代对象
// console.log(iterableObj[Symbol.iterator])
// 1.第一次调用iterableObj[Symbol.iterator]函数
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 2.第二次调用iterableObj[Symbol.iterator]函数
const iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// 3.for...of可以遍历的东西必须是一个可迭代对象
// for...of原理就是根据可迭代对象通过.value获取每一项的值
const obj = {
  name: 'haha',
  age: 18
}

// for (const item of obj) {
//   console.log(item) // obj is not iterable
// }

for (const item of iterableObj) {
  console.log(item) // aaa, bbb, ccc
}
