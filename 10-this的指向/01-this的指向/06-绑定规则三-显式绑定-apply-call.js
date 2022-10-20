// 1.call和apply使用
// function foo() {
//   console.log('函数被调用了', this);
// }

// // foo直接调用和call/apply调用的不同在于this绑定的不同
// // foo直接调用指向的是全局对象(window)
// foo()

// var obj = {
//   name: 'obj'
// }

// // call和apply是可以指定this绑定的对象
// foo.call(obj)
// foo.apply(obj)
// foo.apply('aaa')

// 2.call和apply的区别
function sum(num1, num2) {
  console.log(num1 + num2, this);
}
sum(20, 30) // window

sum.call('call', 20, 30)
sum.apply('apply', [20, 30])

// 3.call和apply在执行函数时，是可以明确的绑定this，这个绑定称之为显式绑定