var obj = {
  // 私有属性(js里面没有严格意义的私有属性)
  _age: 20,
  _eating: function() {}
}

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'haha'
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function() {
      return this._age
    },
    set: function(value) {
      this._age = value
    }
  }
})

// 获取某一个特性属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));
