// new和call/apply不能一起来使用

// new的优先级 > bind
function foo() {
  console.log(this);
}

var bar = foo.bind('aaa')
var fn = new bar() // 'foo {}' 
bar() // 'aaa'


// foo.bind('aaa').call('bbb') // foo.bind('aaa')返回一个this绑定aaa的函数，后面无法再改变它的this指向，所以最终指向aaa

// foo.call('bbb').bind('aaa') // foo.call('bbb')绑定'bbb',返回undefined，undefined.bind会报错

// 结论
// new绑定 > 显式绑定（apply/call/bind) > 隐式绑定 > 默认绑定（独立函数调用）