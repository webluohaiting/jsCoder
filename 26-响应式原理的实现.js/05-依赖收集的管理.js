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

// 响应式函数，接收需要响应的函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
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

// // 伪代码
// // 用不同Map保存不同对象，防止有相同属性值
// // obj对象
// const objMap = new Map()
// objMap.set('name', 'nameDepend')
// objMap.set('age', 'ageDepend')

// // info对象
// const infoMap = new Map()
// infoMap.set('name', 'nameDepend')
// infoMap.set('address', 'addressDepend')

// // 将Map放入总的weakMap
// const targetMap = new WeakMap()
// targetMap.set(obj, objMap)
// targetMap.set(info, infoMap)

// 当name属性改变时，关联代码需要重新执行（响应式过程）
objProxy.name = 'haha'
objProxy.name = 'xixi'
objProxy.name = 'aoao'

