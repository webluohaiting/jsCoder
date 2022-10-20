// 1.测试箭头函数中的this指向
// var name = 'haha'

// var foo = () => {
//   console.log(this);
// }
// var obj = {
//   foo: foo
// }

// foo() // window
// obj.foo() // window
// foo.call('aaa') // window

// 2.应用场景
var obj = {
  data: [],
  getData: function() {
    // 2.1箭头函数之前的解决方案
    // var _this = this
    // 发送网络请求，将结果放到上面的data属性中
    // setTimeout(function() {
    //   var result = ['aaa', 'bbb']
    //   // this.data = result // setTimeout的this指向window
    //   _this.data = result
    // }, 2000)

    // 2.2 箭头函数之后
    setTimeout(() => {
      var result = ['aaa', 'bbb']
      this.data = result // 箭头函数不绑定this，获取外层的this绑定
    }, 2000)
  }
}
