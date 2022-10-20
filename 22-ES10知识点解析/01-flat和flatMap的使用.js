// 1.flat的使用
const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
const newNums = nums.flat() // 默认降低一维
console.log(newNums);

// 传入参数，降低几维
const newNums2 = nums.flat(2)
console.log(newNums2);

// 2.flatMap的使用：深度为1
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})

const newNums4 = nums2.map(item => {
  return item * 2
})

console.log(newNums3, newNums4);


// 3.flatMap的应用场景
const messages = ['Hello World', 'hello lyh', 'My name is haha']

const words = messages.flatMap(item => {
  // item.split(' ')根据空格切割成数组[['Hello', 'World']...]
  // 利用flatMap的降维，返回单个单词的数组
  return item.split(' ')
})

console.log(words) // ['Hello', 'World', 'hello', 'lyh', 'My', 'name', 'is', 'haha']
