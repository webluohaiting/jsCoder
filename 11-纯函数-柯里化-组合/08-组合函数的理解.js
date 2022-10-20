function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result) // 400

// 为了解决重复组合调用这两个函数的问题
function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(10))