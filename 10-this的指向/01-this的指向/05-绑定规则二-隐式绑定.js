// 隐式绑定：Object.fn()
// object对象会被js引擎绑定到fn函数中的this里面

function foo() {
  console.log(this);
}

// 1.案例一
// var obj = {
//   name: 'hshs',
//   foo: foo
// }

// obj.foo() // obj

// 2.案例二
// var obj = {
//   name: 'haha',
//   eating: function() {
//     console.log(this.name + '吃东西');
//   },
//   running: function() {
//     console.log(obj.name + '在跑步');
//   }
// }

// // obj.eating()
// // obj.running()

// var fn = obj.eating
// fn() // '吃东西'，this指向window, this.name取不到

// 3.案例三：
var obj1 = {
  name: 'obj1',
  foo: function() {
    console.log(this);
  }
}
var obj2 = {
  name: 'obj2',
  bar: obj1.foo
}
obj2.bar() //obj2
