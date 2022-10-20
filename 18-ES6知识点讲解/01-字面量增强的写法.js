var name = 'haha'
var age = 12
var obj = {
  // 1.属性的简写property shorthand
  name,
  age,

  // 2.方法的简写method shorthand
  foo() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  // **箭头函数，不是字面量增强写法
  baz: () => {
    console.log(this)
  },

  // 3.计算属性名computed property name
  [name + 123]: 'haha123'
}

obj.foo() // obj
obj.bar() // obj
obj.baz() // window

console.log(obj); // name, age, foo, bar, baz, haha123