var name = 'window'

function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function() {
      return function() {
        console.log(this.name);
      }
    },
    foo2: function() {
      return () => {
        console.log(this.name);
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window, person1.obj.foo1函数this指向obj,return func, func() => window
person1.obj.foo1.call(person2)() // window, person1.obj.foo1函数.call(person2)this指向person2,return func, func() => window
person1.obj.foo1().call(person2) // person2, person1.obj.foo1函数this指向obj,return func, func.call(person2) => person2

person1.obj.foo2()() // obj, person1.obj.foo2函数this指向obj,return arrowFn, arrowFn() => 查找上级obj
person1.obj.foo2.call(person2)() // person2,person1.obj.foo2函数.call(person2)this指向person2,return arrowFn, arrowFn() => 查找上级person2
person1.obj.foo2().call(person2) // obj,person1.obj.foo2函数this指向obj, return arrowFn, arrowFn() => 查找上级obj


