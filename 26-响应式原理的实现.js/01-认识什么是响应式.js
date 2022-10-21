let m = 100

// 关联'name'属性的代码
console.log(m);
console.log(m * 2);
console.log(m ** 2);

// 当m属性改变时，关联代码需要重新执行（响应式过程）
m = 200


// 对象的响应式
const obj = {
  name: 'haha',
  age: 20
}

// 关联'name'属性的代码
const newName = obj.name
console.log(obj.name)

// 当name属性改变时，关联代码需要重新执行（响应式过程）
obj.name = name

