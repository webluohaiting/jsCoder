// 案例一
// var name = 'abc'

// var foo = () => {
//   console.log(arguments); // 浏览器没有arguments,node有
//   console.log(name);
// }

// foo()

// 案例二
// function foo() {
//   var bar = () => {
//     console.log(arguments);
//   }
//   return bar
// }
// var fn = foo()
// fn(1, 2)

// 案例三
var foo = (num1, num2, ...args) => {
  console.log(args);
}

foo(1, 2, 3, 4, 5)
