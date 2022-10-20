// ES12: FinalizationRegistry类

const finalRegistry = new FinalizationRegistry(val => {
  console.log('注册在FinalizationRegistry的某一个对象被销毁了:', val);
})


let obj = { name: 'haha' }
let info = { age: 20 }

finalRegistry.register(obj, 'obj')
finalRegistry.register(info, 'info')


obj = null
info = null


// 验证弱引用会被回收
let sObj = [10, 20, 30]
let wsObj = [{ name: 'haha' }, { name: 'xixi' }]
const set = new Set(sObj)
const weakSet = new WeakSet(wsObj)

finalRegistry.register(sObj, 'sObj')
finalRegistry.register(wsObj, 'wsObj')

sObj = null
wsObj = null

// 垃圾回收之后，set强引用对象还在，但是weakSet弱引用对象被回收了
setTimeout(() => {
  console.log(set, weakSet)
}, 10000)
