// ES5中没有块级作用域
// 块代码（block code）
{
  var test = 'test'
}

console.log(test)

// 在ES5中只有两个东西回形成作用域
// 1.全局作用域
// 2.函数作用域
function foo() {
  var bar = 'bar'
}
console.log(bar)

function foo() {
  function demo() {
    
  }
}