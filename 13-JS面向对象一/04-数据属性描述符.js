// name和age没有定义属性描述符，但是也是具备对应属性的
// value: 存入的值
// configurable: true
// enumerable: true
// writable: true
var obj = {
  name: 'haha',
  age: 30
}

// 数据属性描述符
Object.defineProperty(obj, 'address', {
  value: '北京市', // 默认undefined
  configurable: false, // 是否可以配置（删除，重新定义），默认false
  enumerable: false, // 是否可以枚举，默认false
  writable: false // 是否可以写入（重新赋值），默认false
})
// 1.configurable
// delete obj.name
// console.log(obj.name);

// delete obj.address
// console.log(obj.address); // 不可删除

// // 不可重新定义，Cannot redefine property: address
// Object.defineProperty(obj, 'address', {
//   value: '广州市',
//   configurable: true
// })


// 2.enumerable
// console.log(obj); // { name: 'haha', age: 30, address: '北京市' }

// for (var key in obj) {
//   console.log(obj[key]); // haha 30
// }

// console.log(Object.keys(obj)); // ['name', 'age']


// 3.writable
obj.address = '上海市'
console.log(obj); // { name: 'haha', age: 30, address: '北京市' }