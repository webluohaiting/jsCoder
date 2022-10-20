// 4.应用场景（vue3的响应式原理）
const obj1 = {
  name: 'haha',
  age: 20
}

// vue中对属性单独进行执行的函数
function obj1NameFn1() {}
function obj1NameFn2() {}
function obj1AgeFn1() {}
function obj1AgeFn2() {}

const obj2 = {
  name: 'xixi',
  height: 1.88,
  address: '广州市'
}

function obj2NameFn1() {}
function obj2NameFn2() {}

// 1.创建WeakMap:使用weakMap时，对obj有引用，当obj销毁，则相应对象也能被销毁
const weakMap = new WeakMap()

// 2.收集依赖结构
// 2.1 对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set('name', [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
weakMap.set(obj1, obj1Map)

// 2.2 对obj2收集的数据结构
const obj2Map = new Map()
obj1Map.set('name', [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 3.如果obj1的name发生了改变
// 通过Proxy/Object.defineProperty
obj1.name = 'aoao'
const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(fn => fn())
