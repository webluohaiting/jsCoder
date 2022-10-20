const names = ['aaa', 'bbb',' ccc']
const name = 'haha'
const info = { name: 'haha', age: 20}

// 1.函数调用时
function foo(x, y, z) {
  console.log(x, y, z)
}

foo.apply(null, names) // aaa bbb  ccc
foo(...names) // aaa bbb  ccc
foo(...name) // h a h

// 2.构造数组时
const newNames = [...names, ...name]
console.log(newNames) // ['aaa', 'bbb', ' ccc', 'h', 'a', 'h', 'a']

// 3.构建对象字面量时，ES2018(ES9)
const obj = { ...info, address: '广州市'}
console.log(obj)
