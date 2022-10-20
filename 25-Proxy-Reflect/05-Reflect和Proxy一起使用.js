const obj = {
  name: 'haha',
  age: 20
}


const objProxy = new Proxy(obj, {
  // 获取值时的捕获器(target:代理对象，key:属性值)
  get: function(target, key) {
    console.log(`监听到对象的${key}被访问了`, target);
    return Reflect.get(target, key)
  },

  // 设置值时的捕获器(target:代理对象，key:属性值, newValue:新的值)
  set: function(target, key, newValue) {
    console.log(`监听到对象的${key}被设置了`, target);
    return Reflect.set(target, key, newValue) // Reflect执行完后会返回一个布尔值，可以判断是否赋值成功
  }
})


objProxy.name = 'xixi'

// console.log(objProxy.name);
console.log(obj.name);
