const weakSet = new WeakSet()
const set = new Set()

// 1.区别一：不能添加基本数据类型，只能存放对象类型
// weakSet.add(10) // 报错,Invalid value used in weak set

// 2.区别二：对对象是一个弱引用（只剩弱引用，会被垃圾回收）
// 对象Ox100: { name: 'haha' }
// obj: 0x100，强引用
// weakSet: { 0x100 }，弱引用
// set: { 0x100 }，强引用
// obj = null，set指向对象Ox100为强引用，对象Ox100不会被销毁
// 但weakSet弱引用，仅剩弱引用时，对象Ox100会被销毁
let obj = {
  name: 'haha'
}

weakSet.add(obj)

// set.add(obj)

obj = null

console.log(weakSet, set)

// weakSet有add,delete,has方法，但是没办法做遍历


// 3.WeakSet的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }
  running() {
    if (!personSet.has(this)) {
      throw new Error('不能通过非构造方法创建出来的对象来调用running方法')
    }
    console.log('running', this)
  }
}

const p = new Person()
p.running()

// 假设p = null, 则personSet会自动回收this,如果是强引用，则this不会被回收

// p.running.call({ name: 'haha'})
