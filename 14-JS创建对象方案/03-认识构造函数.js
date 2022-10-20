function foo() {
  console.log('执行foo');
}

// 普通函数：foo就是一个普通的函数
foo()

// 构造函数：通过new关键字去调用一个函数，那么这个函数就是一个构造函数了
// new foo可以直接调用函数，加()可以传递参数
var f1 = new foo
console.log(f1);

// 当我们通过new去调用一个函数时，和普通调用有什么区别
// 普通函数调用过程
// function foo() {
//   // 执行函数体
//   return undefined
// }

// new调用函数模拟过程：
// function foo() {
//   var moni = {}
//   this = moni
//   // 执行函数体
//   return moni
// }
