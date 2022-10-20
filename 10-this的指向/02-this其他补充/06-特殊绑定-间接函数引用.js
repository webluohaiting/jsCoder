var obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this);
  }
}

var obj2 = {
  name: 'obj2'
}

obj2.bar = obj1.foo
obj2.bar() // obj2

console.log(obj2.bar = obj1.foo); // foo() { console.log(this); }
(obj2.bar = obj1.foo)() // 独立函数调用，window
