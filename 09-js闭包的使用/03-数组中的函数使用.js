var nums = [10, 5, 11, 55, 100]

// 函数function:独立的function，称之为一个函数
function func() {}
// 方法methods:当函数属于某一个对象时，我们称这个函数是这个对象的方法
var obj = {
  say: function() {}
}

// 1.for循环
var newNums = []
for (var i = 0; i < nums.length; i++) {
  var num = nums[i]
  if (num % 2 === 0) {
    newNums.push(num)
  }
}
console.log(newNums); // [ 10, 100 ]

// 2.过滤filter(val, index, arr)：返回值为Boolean
var newNums1 = nums.filter(item => item % 2 !== 0)
console.log(newNums1); // [ 5, 11, 55 ]

// 3.映射map():返回处理后的item
var newNums2 = nums.map(item => item * 10)
console.log(newNums2); // [ 100, 50, 110, 550, 1000 ]

// 4.迭代枚举forEach():一般打印，没有返回值
nums.forEach(item => {
  console.log(item);
})

// 5.累加reduce
var newNums3 = nums.reduce((preValue, item) => {
  return preValue + item
}, 0)
console.log(newNums3); // 181

// 6.查找find: 返回值为Boolean，最终返回一个item
// 7.查找下标findIndex: 返回值为Boolean，最终返回一个index
var item = nums.find(item => {
  return item === 11
})
console.log(item); // 11

var friends = [
  { name: 'haha', age: 20 },
  { name: 'xixi', age: 10 },
  { name: 'aiai', age: 29 },
  { name: 'borbor', age: 80 },
]
const findFriend = friends.find(item => item.name === 'haha')
console.log(findFriend); // { name: 'haha', age: 20 }
const friendIndex = friends.findIndex(item => item.name === 'haha')
console.log(friendIndex); // 0
