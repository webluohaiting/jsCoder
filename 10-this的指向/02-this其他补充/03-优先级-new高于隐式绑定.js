var obj = {
  name: 'obj',
  foo: function() {
    console.log(this);
  }
}
// new优先级 > 隐式绑定
var f = new obj.foo()