function foo(num1, num2) {
  // 1.自己遍历
  var newArr = []
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10)
  }
  console.log(newArr);

  // 2.arguments转成array类型
  // 2.1 自己遍历arguments中所有的元素
  var newArr1 = []
  for (var i = 0; i < arguments.length; i++) {
    newArr1.push(arguments[i])
  }
  console.log(newArr1);

  // 2.2 通过数组的slice方法将arguments转成array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2);

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3);

  // 2.3 ES6的语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4)

  var newArr5 = [...arguments]
  console.log(newArr5)
}

foo(10, 20, 30, 40)


// Array.prototype.slice原理
Array.prototype.myslice = function(start, end) {
  var arr = this
  var newArr = []
  start = start || 0
  end = end || arr.length
  for (let i = start; i < end; i++) {
    newArr.push(arr[i])
  }
  return newArr
}
var testArr = ['aaa', 'bbb', 'ccc', 'ddd']
console.log(testArr.myslice(1, 4))
console.log(Array.prototype.myslice.call(['aaa', 'bbb', 'ccc', 'ddd'], 1, 4))