function foo() {
  var name = 'haha'
  var age = 20

  function bar() {
    debugger // 可以打印name，但是age已被清理回收，无法打印
    console.log(name);
    // console.log(age);
  }

  return bar
}

var fn = foo()
fn()