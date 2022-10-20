var a = 200
function foo() {
  var a = b = 100
  // 转成下面的代码
  // b = 100
  // var a = 100 // a为函数内的局部变量
}

foo()

console.log(a); // 200
console.log(b); // 100
