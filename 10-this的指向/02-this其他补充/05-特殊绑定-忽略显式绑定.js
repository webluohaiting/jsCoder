function foo() {
  console.log(this);
}

foo.apply('abc') // 'abc'
foo.apply({}) // {}

//call/apply/bind 当传入null或者undefined时，自动将this绑定成全局对象
foo.apply(null) // window
foo.apply(undefined) // window

var bar = foo.bind(null)
bar() // window
