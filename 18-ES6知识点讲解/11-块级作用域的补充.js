const names = ['aaa', 'bbb', 'ccc']

for(let i = 0; i < names.length; i++) {
  console.log(names[i])
}
// 执行过程如下：
// 如果使用const定义i，因为i不能实现自加过程，所以会报错
// {
//   let i = 0
//   console.log(names[0])
// }
// i++
// {
//   let i = 1
//   console.log(names[1])
// }
// i++
// {
//   let i = 2
//   console.log(names[2])
// }


// for...of：ES6新增的遍历数组（对象）
for (const item of names) {
  console.log(item)
}

// 执行过程如下：可以使用const
// {
//   const item = 'aaa'
//   console.log(item)
// }
// {
//   const item = 'bbb'
//   console.log(item)
// }
// {
//   const item = 'ccc'
//   console.log(item)
// }