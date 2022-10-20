var obj = {
  name: 'haha',
  age: 30
}

//Object.defineProperty(对象，属性，属性描述符)
Object.defineProperty(obj, 'height', {
  value: 1.88
})

console.log(obj); // node环境打印：{ name: 'haha', age: 30 }，height为不可枚举的
console.log(obj.height); // 1.88
