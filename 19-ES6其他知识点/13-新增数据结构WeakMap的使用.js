const obj = { name: 'obj1' }

// 1.区别一：WeakMap的key不能使用基本数据类型
const weakMap = new WeakMap()
// weakMap.set(1, 'aaa') // Invalid value used as weak map key

// 1.WeakMap和Map的区别二：
const map = new Map()
map.set(obj, 'aaa') // 强引用，obj = null后，因为map的key引用了对象，所以对象不会被销毁

weakMap.set(obj, 'aaa')// 弱引用，obj = null后，只剩弱引用，对象会被销毁

// obj = null

// 3.常见方法
weakMap.set(obj, '111')
console.log(weakMap.get(obj))
console.log(weakMap.has(obj))
weakMap.delete(obj)

// 不能清除clear, 不能遍历，没有size属性

