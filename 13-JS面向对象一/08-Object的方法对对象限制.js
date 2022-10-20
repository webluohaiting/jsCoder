var obj = {
  name: 'haha',
  age: 18
}

// 1.禁止对象继续添加新的属性
// Object.preventExtensions(obj)

// obj.height = 1.88
// obj.address = '广州市'

// console.log(obj);

// 2.禁止对象配置/删除里面的属性
// Object.seal(obj)

// delete obj.name
// console.log(obj);

// 3.让属性不可修改(writable: false)
Object.freeze(obj)

obj.name = 'xixi'
console.log(obj);
