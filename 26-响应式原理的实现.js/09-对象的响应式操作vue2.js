// 保存当前需要收集的响应式函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }
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

function reactive(obj) {
  // ES6以前，使用Object.defineProperty
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function() {
        const depend = getDepend(obj, key)
        depend.depend()
        return value
      },
      set: function(newVal) {
        value = newVal
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })
  return obj
}

const obj = {
  name: 'haha',
  age: 20
}
const objProxy = reactive(obj)


const infoProxy = reactive({
  address: '广州市',
  height: 1.88
})


watchFn(() => {
  console.log(objProxy.name);
})

watchFn(() => {
  console.log(infoProxy.address);
})

objProxy.name = 'aoao'
infoProxy.address = '北京市'
