var obj = {
  name: 'haha',
  age: 18,
  height: 1.99
}

// 对象的解构
var { name, age, height } = obj
console.log(name, age, height);

// 获取某个属性
var { age } = obj
console.log(age);

// 对属性重命名
var { name: newName } = obj
console.log(newName);

// 默认值+重命名
var { address: newAddress = '广州市' } = obj
console.log(newAddress);