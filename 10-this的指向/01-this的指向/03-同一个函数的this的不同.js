// 结论：1.this的绑定与定义的位置没有关系
// 2.this的绑定与调用方式和位置有关系
// 3.this是在运行时被绑定的

function foo() {
  console.log(this);
}

// 1.直接调用这个函数
foo() // window

// 2.创建一个对象，对象中的函数指向foo
var obj = {
  name: 'why',
  foo: foo
}

obj.foo() // obj

// 3.apply调用
foo.apply('abc') // String 'abc'