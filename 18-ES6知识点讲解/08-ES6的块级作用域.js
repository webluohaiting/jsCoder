// ES6的代码块级作用域
// 对let/const/function/class声明的类型是有效的
{
  var name = 'xixi'
  let foo = 'haha'
  function demo() {
    console.log('demo');
  }
  class Person {}
}
console.log(name) // xixi
// console.log(foo) // 报错，foo is not defined
demo() // demo, 不同的浏览器有不同的实现（大部分浏览器为了兼容以前的代码，让function是没有块级作用域）
// var p = new Person() // Person is not defined
