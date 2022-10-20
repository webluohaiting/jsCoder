var name = 'window'

function Person(name) {
  this.name = name
  this.foo1 = function() {
    console.log(this.name);
  }
  this.foo2 = () => console.log(this.name);
  this.foo3 = function() {
    return function() {
      console.log(this.name);
    }
  },
  this.foo4 = function() {
    return () => {
      console.log(this.name);
    }
  },
  this.foo5 = () => {
    return () => {
      console.log(this.name);
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1(隐式绑定person1)
person1.foo1.call(person2) // person2(person1.foo1 => func => func.call(person2), this显式绑定person2)
console.log('\n');

person1.foo2() // person1(()=>{}找上层作用域, 为person1)
person1.foo2.call(person2) // person1(person1.foo2 => arrowFn => arrowFn.call(person2), 不管显式绑定，直接找上层作用域, 为person1)
console.log('\n');

person1.foo3()() // window（person1.foo3() => func => func() => 独立函数，指向window）
person1.foo3.call(person2)() // window（person1.foo3 => 一层func => 一层func.call(person2)指向person2 => 二层func() => 独立函数，指向window）
person1.foo3().call(person2) //person2（person1.foo3() => func => func.call(person2) => person2)
console.log('\n');

person1.foo4()() // person1（person1.foo4() => arrowFn => arrowFn() => 查找上级 => person1)
person1.foo4.call(person2)() // person2（person1.foo4 => func => 一层func.call(person2)指向person2 => 二层arrowFn => arrowFn() => 查找上级 => person2)
person1.foo4().call(person2) // person1（person1.foo4() => arrowFn => arrowFn.call(person2) => 查找上级 => person1)
console.log('\n');

person1.foo5()() // person1（person1.foo5() => arrowFn => arrowFn() => 查找上级 => person1)
person1.foo5.call(person2)() // person1（person1.foo5 => arrowFn => 一层arrowFn.call(person2)显式绑定无效，查找上级person1 => 二层arrowFn => arrowFn() => 查找上级 => person1)
person1.foo5().call(person2) // person1（person1.foo5() => arrowFn => arrowFn.call(person2) => 查找上级 => person1)