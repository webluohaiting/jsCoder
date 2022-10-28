// 1.模拟promise类实现过程
class Person {
  constructor(callback) {
    let foo = function() {

    }
    let bar = function() {
      
    }
    // 闭包，作用域链constructor => callback函数，所以callback函数可以使用foo和bar
    callback(foo, bar)
  }
}
const p = new Person((foo, bar) => {
  foo()
  bar()
})


// 2.promise实现异步请求过程
function foo() {
  // 2.1 返回承诺
  return new Promise((resolve, reject) => {

  })
}

// 2.2 拿到承诺
const fooPromise = foo()

// 2.3.1.第一种回调方式
// then的第一个参数会执行resolve函数的回调
// 第二个参数会执行reject函数的回调
fooPromise.then(() => {

}, () => {

})

// 2.第二种回调方式（node不支持）
// then方法传入的回调函数，会在Promise执行resolve函数时，被回调
fooPromise.then(() => {

})

// catch方法传入的回调函数，会在Promise执行reject函数时，被回调
fooPromise.catch(() => {

})



// 传入的这个函数，被称之为executor
// resolve: 回调函数，在成功时，回调resolve函数
// reject: 回调函数，在失败时，回调reject函数
const promise = new Promise((resolve, reject) => {
  console.log('Promise传入的函数被执行了');
  resolve()
  // reject()
})

promise.then(() => {

})
promise.catch(() => {
  
})

