var obj = {
  name: 'haha',
  age: 20
}

// 获取时会触发[[get]]操作
// 1.在当前对象查找属性
// 2.如果没有找到，回去原型（__proto__）对象上查找

obj.__proto__= {}

obj.__proto__.__proto__ = {}

obj.__proto__.__proto__.__proto__ = {
  address: '北京市'
}

console.log(obj.address)
