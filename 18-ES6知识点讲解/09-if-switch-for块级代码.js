// 1.if语句的代码就是块级作用域
// if (true) {
//   var foo = 'foo'
//   let bar = 'bar'
// }

// console.log(foo) // foo
// console.log(bar) // 报错，bar未定义

// 2.switch语句的代码也是块级作用域
// var color= 'red'
// switch (color) {
//   case 'red': 
//     var foo = 'foo'
//     let bar = 'bar'
// }

// console.log(foo) // foo
// console.log(bar) // 报错，bar未定义


// 3.for语句的代码也是块级作用域
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i) // 0-10

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i) // 报错，i未定义