// 保存当前需要收集的响应式函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }
  // addFn(fn) {
  //   this.reactiveFns.add(fn)
  // }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}
const obj = {
  name: 'haha',
  age: 20
}

const targetMap = new WeakMap()

// 利用关联函数执行时，会调用get方法
// get能获取到关联的target和key，从而可以将fn放入对应depend的reactiveFns

function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 获取改变的depend
// 利用该函数，在map和depend为空时，创建对应target和key的map和depend
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 1.获取改变的那个类
    const depend = getDepend(target, key)
    // 将与该类关联的函数加入reactiveFns
    depend.depend()
    // activeReactiveFn && depend.addFn(activeReactiveFn)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    // 先修改完数据，才去通知
    Reflect.set(target, key, newValue, receiver)
    // 1.获取改变的那个类
    const depend = getDepend(target, key)
    // 2.调用类的notify方法，通知相应函数发生改变
    depend.notify()
  }
})


// 关联函数
function linkName() {
  console.log('关联name的函数改变了', objProxy.name)
}

function linkAge() {
  console.log('关联age的函数改变了', objProxy.age)
}

function linkNameAndAge() {
  console.log('关联name和age的函数改变了', objProxy.name, objProxy.age)
}

// 收集关联函数
watchFn(linkName)
watchFn(linkAge)
watchFn(linkNameAndAge)

console.log('准备改变name');
objProxy.name = 'aoao'
console.log('准备改变age');
objProxy.age = 30