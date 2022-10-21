class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
let activeReactiveFn = null
function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

// 对象的响应式
const obj = {
  name: 'haha', // 对应一个depend对象
  age: 20 // 对应一个depend对象
}

// 监听对象的属性变量：Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 根据targer.key获取对应的depend
    const depend = getDepend(target, key)

    // 给depend对象中添加响应函数
    depend.addDepend(activeReactiveFn)

    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    console.log(depend.reactiveFns);
    depend.notify()
  }
})

watchFn(function() {
  console.log('关联属性的函数');
  console.log('需要响应的函数');
  const newName = obj.name
  console.log(obj.name)
})

watchFn(function() {
  console.log('hello world');
  console.log('需要响应的函数');
})


function bar() {
  console.log('普通的其他函数');
  console.log('不需要响应的函数');
}

const info = {
  name: 'keke',
  address: '广州市'
}

watchFn(function() {
  console.log(info.address, '监听address变化=======1');
})

watchFn(function() {
  console.log(info.address, '监听address变化=======2');
})


