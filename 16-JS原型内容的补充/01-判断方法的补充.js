var obj = {
  name: 'haha',
  age: 18
}

// Object.create方法可以给实例对象添加一些属性
var info = Object.create(obj, {
  address: {
    value: '广州市',
    enumerable: true
  }
})

// hasOwnProperty方法判断(只判断当前实例对象是否拥有属性)
console.log(info.hasOwnProperty('address')); // true
console.log(info.hasOwnProperty('name')); // false

// in 操作符（判断原型链上是否有该属性）
console.log('address' in info); // true
console.log('name' in info); // true

// for in
for (var key in info) {
  console.log(key);
}

