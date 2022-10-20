function foo() {
  console.log(this);
}

// 需要重复写call('aaa'),为了简写，使用bind
// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')

// 使用bind使this指向aaa，返回生成一个新的函数
// 优先级：显式绑定bind > 默认绑定
var newFoo = foo.bind('aaa')

newFoo()
newFoo()
newFoo()
newFoo()