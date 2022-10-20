function foo() {
  function bar() {

  }
  return bar
}

var fn1 = foo()
var fn2 = foo()

console.log(fn1 === fn2) // false

// 每次通过new创建一个新的对象，对象中的方法就会重新创建，浪费空间
function Person() {
  this.eating = function() {
    console.log(this.name + '在吃东西')
  }
}

var p1 = new Person()
var p2 = new Person()

console.log(p1.eating === p2.eating) // false
