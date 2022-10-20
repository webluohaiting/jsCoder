// 1.ES5以及之前给参数默认值
/**
 * 缺点：
 * 1.代码写起来麻烦，并且阅读性是比较差的
 * 2.这种写法有bug（m,n 传入为0，''时） 
 */
// function foo(m, n) {
//   m = m || 'aaa'
//   n = n || 'bbb'
//   console.log(m, n);
// }

// foo() // aaa bbb
// foo(0, '') // aaa bbb



// 2.ES6提供给函数参数默认值
function foo(m = 'aaa', n = 'bbb') {
  console.log(m, n);
}
foo() // aaa bbb
foo(0, '') // 0 ''

// babel转化
// function foo() {
//   var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';
//   var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bbb';
//   console.log(m, n);
// }

// 3.对象参数和默认值以及解构
function printInfo({ name, age } = { name: 'haha', age: 20 }) {
  console.log(name, age)
}

printInfo()
printInfo({ name: 'xixi', age: 80 })

// 另一种写法
function printInfo1({ name = 'aoao', age = 18 } = {}) {
  console.log(name, age)
}
printInfo1()
printInfo1({ name: 'xixi', age: 80 })

// 4.有默认值的形参最好放到最后(因为放到最后传参可以不传)
function bar(x, y, z = 30) {
  console.log(x, y, z);
}
bar(10, 20)

// 5.有默认值的函数的length属性
function baz(x, y, z = 10, m, n)
console.log(baz.length) // 2,有默认值的开始到最后不算在length里