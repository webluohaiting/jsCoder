function foo() {
  m = 100 // 没有用var定义的情况下，m会被直接放到全局对象GO里
}

foo()
console.log(m); // 100