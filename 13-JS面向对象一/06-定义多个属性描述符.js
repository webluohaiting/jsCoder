var obj = {
  // 私有属性(js里面没有严格意义的私有属性)
  _age: 20,
  _eating: function() {},
  // 另一种写法
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  }
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'haha'
  },
  // age: {
  //   configurable: false,
  //   enumerable: false,
  //   get: function() {
  //     return this._age
  //   },
  //   set: function(value) {
  //     this._age = value
  //   }
  // }
})
console.log(obj);