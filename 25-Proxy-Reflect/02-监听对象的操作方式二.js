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
  }
})

console.log(objProxy.name); // haha
console.log(objProxy.age); // 20

objProxy.name = 'aoao'
objProxy.age = 40

console.log(obj.name); // aoao
console.log(obj.age); // 40


