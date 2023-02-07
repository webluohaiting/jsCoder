function foo(type) {
  if (type === 0) {
    throw new Error('foo error message')
  }
}

// 两种处理方法：
// 1.第一种是不处理，那么异常会进一步抛出，直到最顶层的调用
// 如果在最顶层也没有对这个异常进行处理，那么程序会被终止执行，并且报错

// bar会继续将收到的异常直接抛出去
// function bar() {
//   foo()
// }

// 2.使用try...catch捕获异常
// finally常用于close操作
function bar() {
  try {
    foo(0)
    console.log('bar函数后续继续运行')
  } catch(err) { // es10后，err可以省略 => catch{}
    console.log('err:', err.message)
    foo(1)
  } finally {
    console.log('finally代码执行')
  }
}

function test() {
  bar()
  console.log('test函数后续继续运行')
}

function demo() {
  test()
  console.log('demo函数后续继续运行')
}


demo()
console.log('script end');


