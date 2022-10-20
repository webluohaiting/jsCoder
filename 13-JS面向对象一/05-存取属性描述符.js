var obj = {
  name: 'haha',
  age: 30,
  _address: '北京市'
}
// value与writable不能和get与set共存

// 1.隐藏某一个私有属性，不希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存取属性描述符
Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: true,
  get: function() {
    foo()
    return this._address
  },
  set: function(value) {
    bar()
    this._address = value
  }
})

console.log(obj.address);

obj.address = '上海市'

console.log(obj.address);

function foo() {
  console.log('获取了一次address的值');
}

function bar() {
  console.log('设置了一次address的值');
}
