// 存取关联函数的数组
let reactiveFns = []

// 响应式函数，接收需要响应的函数
function watchFn(fn) {
  reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
  name: 'haha',
  age: 20
}

watchFn(function() {
  console.log('关联属性的函数');
  console.log('需要响应的函数');
  const newName = obj.name
  console.log(obj.name)
})

watchFn(function() {
  console.log('hello world');
  console.log('需要响应的函数');
})


function bar() {
  console.log('普通的其他函数');
  console.log('不需要响应的函数');
}


// 当name属性改变时，关联代码需要重新执行（响应式过程）
obj.name = 'haha'

// 遍历执行数组中的函数
reactiveFns.forEach(fn => {
  fn()
})