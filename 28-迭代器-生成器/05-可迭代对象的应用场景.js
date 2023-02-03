// 1.for of场景

// 2.展开语法（spread syntax）
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

const names = ['aaa', 'bbb', 'ccc']
const newNames = [...names, ...iterableObj]
console.log(newNames)


// obj特殊: 不可遍历，但是可以展开,此处展开不是使用迭代器原理
// ES9中新增的一个特性
const obj = { name: 'haha', age: 20 }

const newObj = { ...obj }
console.log(newObj)


// 3.解构语法
const [ name1, name2 ] = names
const { name, age } = obj // 不是迭代器

// 4.创建一些其他对象
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from(iterableObj)

console.log(set1, set2, arr1);

// 5.Promise.all
Promise.all(iterableObj).then(res => {
  console.log(res)
})
