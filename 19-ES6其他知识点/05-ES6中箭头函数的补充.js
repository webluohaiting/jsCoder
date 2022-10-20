// function foo() {

// }
// const f = new foo()
// f.__proto__ = foo.prototype

var bar = () => {
  console.log(this, arguments); // this与arguments需要去上层作用域里找
}

console.log(bar.prototype); // undefined

const b = new bar() // 报错，bar is not a constructor