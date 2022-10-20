// var obj = {
//   name: 'obj',
//   foo: function() {
//     console.log(this);
//   }
// }
// obj.foo() // obj

// 1.call和apply: 显示绑定 > 隐式绑定
// obj.foo.call('abc') // abc
// obj.foo.apply('abc') // abc

// 2.bind：bind绑定 > 隐式绑定
// var bar = obj.foo.bind('aaa')
// bar() // aaa

// 3.bind更明显的比较
function foo() {
  console.log(this);
}
var obj = {
  name: 'obj',
  foo: foo.bind('aaa')
}
obj.foo() // 'aaa'
