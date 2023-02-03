// 编写一个迭代器
// 无用的迭代器
// const iterator = {
//   next: function() {
//     return { done: true, value: 123 }
//   }
// }

// 数组
const names = ['aaa', 'bbb', 'ccc']

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next: function() {
    // 流程：
    // return { done: false, value: 'aaa' }
    // return { done: false, value: 'bbb' }
    // return { done: false, value: 'ccc' }
    // return { done: true, value: undefined }
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
