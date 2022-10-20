// 1.传入普通参数
// function foo(arg) {
//   console.log('foo', arg);
// }

// foo(123)


// 2.将函数作为参数传递
// function foo(aaa) {
//   aaa()
// }

// function bar() {
//   console.log('bar');
// }

// foo(bar)

// 3.传入普通参数与函数
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}
function sub(num1, num2) {
  return num1 - num2
}
function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30
// calc(20, 30, add)
// calc(20, 30, sub)
calc(20, 30, mul)