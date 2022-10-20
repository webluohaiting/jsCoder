var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name);
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name);
    }
  }
}
var person2 = { name: 'person2' }

person1.foo1() // person1（隐式绑定）
person1.foo1.call(person2) // person2（显示绑定>隐式绑定）

person1.foo2() // window(不绑定作用域，上层是全局作用域)
person1.foo2.call(person2) // window(不绑定作用域，上层是全局作用域)

person1.foo3()() // window（独立函数调用）
person1.foo3.call(person2)() // window（独立函数调用）
person1.foo3().call(person2) // person2（person1.foo3()this指向person1, 返回的函数.call(person2),所以最终指向person2)

person1.foo4()() // person1(person1.foo4()this指向person1,返回箭头函数(),找上层为person1)
person1.foo4.call(person2)() // person2(person1.foo4.call(person2)this指向person2,返回箭头函数(),找上层为person2)
person1.foo4().call(person2) // person1(person1.foo4()this指向person1,返回箭头函数(),找上层为person1)
