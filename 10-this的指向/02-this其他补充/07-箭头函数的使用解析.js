// 1.编写箭头函数
// 1.1 ()：参数
// 1.2 =>: 箭头
// 1.3 {}：函数的执行体
// var foo = (num1, num2, num3) => {
//   console.log(num1, num2, num3);
// }

// 2.高阶函数在使用时，也可以传入箭头函数
var nums = [10, 21, 30, 44, 55]
// nums.forEach((item, index, arr) => {})

// 3.箭头函数的简写：
// 3.1 参数只有一个，可以省略()
// nums.forEach(item => {
//   console.log(item);
// })

// 3.2 如果函数执行体只有一行代码，可以省略{}
// 它会默认将这行代码的执行结果作为返回值
// nums.forEach(item => console.log(item)) // 返回值undefined
// nums.filter(item => item % 2 === 0) // nums.filter(item => return item % 2 === 0)
var result = nums.filter(item => item % 2 === 0)
.map(item => item * 100)
.reduce((preVal, item) => preVal += item , 0)
console.log(result)

// 3.3 如果一个箭头函数，只返回一个对象() => ({})（加个()使({})成为一个语句，而不是函数执行体）
var bar = () => ({ name: 'haha', age: 18 })
bar()