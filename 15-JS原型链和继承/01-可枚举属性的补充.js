var obj = {
  name: 'haha',
  age: 20
}

Object.defineProperty(obj, 'address', {
  value: '北京市' // 不定义enumerable，configurable默认都为false
})

console.log(obj) // 浏览器为了方便我们调试，会打印address