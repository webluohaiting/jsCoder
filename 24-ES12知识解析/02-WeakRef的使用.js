// WeakRef()弱引用
// WeakRef.prototype.deref方法:获取原对象
const finalRegistry = new FinalizationRegistry(val => {
  console.log('注册在FinalizationRegistry的某一个对象被销毁了:', val);
})


let obj = { name: 'haha' }
let info = new WeakRef(obj) 

console.log(info.deref().name) // haha

finalRegistry.register(obj, 'obj')

obj = null
setTimeout(() => {
  console.log(info.deref())
}, 10000)