const obj = {
  name: 'haha',
  age: 20
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器(target:代理对象，key:属性值)
  get: function(target, key) {
    console.log(`监听到对象的${key}被访问了`, target);
    return target[key]
  },

  // 设置值时的捕获器(target:代理对象，key:属性值, newValue:新的值)
  set: function(target, key, newValue) {
    console.log(`监听到对象的${key}被设置了`, target);
    target[key] = newValue
  },

  // 监听in的捕获器
  has(target, key) {
    console.log(`监听到对象的${key}属性的in操作`, target);
    return key in target
  },

  deleteProperty(target, key) {
    console.log(`监听到对象的${key}属性的删除`, target);
    delete target[key]
  }
})

// in操作符
console.log('name' in objProxy)


// delete操作
delete objProxy.name
console.log(objProxy)