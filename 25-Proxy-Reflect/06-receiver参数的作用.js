const obj = {
  _name: 'haha',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

// 访问流程：objProxy.name => 进入proxy的get => Reflect.get() => obj的get name() => 但this指向obj => 访问obj._name，取到值
// 这样访问了obj._name，违反了不操作obj的初衷

// const objProxy = new Proxy(obj, {
//   get(target, key) {
//     console.log(target);
//     return Reflect.get(target, key)
//   },
//   set(target, key, newValue) {
//     Reflect.set(target, key, newValue)
//   }
// })

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('get--------', target, key, receiver) // obj, name, objProxy
    return Reflect.get(target, key, receiver) // 在Reflect传入receiver，会改变this的指向
  },
  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  }
})

objProxy.name = 'aoao'
console.log(objProxy.name);

console.log(obj.name);
