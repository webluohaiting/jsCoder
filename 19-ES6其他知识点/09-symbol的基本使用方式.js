// 1.ES6之前，对象的属性名（key）
// var obj = {
//   name: 'haha',
//   age: 20,
//   friend: { name: 'xixi' }
// }

// obj['name'] = 'aoao'
// console.log(obj); // 原来的name会被覆盖掉


// 2.ES6中symbol
const s1 = Symbol()
const s2 = Symbol()

console.log(s1, s1 === s2);

// 3.给symbol添加描述description
const s3 = Symbol('s3的描述')
console.log(s3.description);

// 4.Symbol值作为key
// 4.1 在定义对象字面量时使用

const obj = {
  [s1]: 'aaa',
  [s2]: 'bbb'
}

// 4.2 新增属性
obj[s3] = 'ccc'

// 4.3 Object.defineProperty()方式
const s4 = Symbol()
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'ddd'
})

// 获取不能通过.语法获取
console.log(obj[s1], obj[s2], obj[s3], obj[s4]);

// 4.4 使用symbol作为key的属性名，在遍历Object.keys中是获取不到这些Symbol的值
// 需要时候用Object.getOwnPropertySymbols来获取所有Symbol的key
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
const sKeys = Object.getOwnPropertySymbols(obj)
for (const sKey of sKeys) {
  console.log(obj[sKey]);
}

// 5 定义相同的Symbol值：Symbol.for(key)/Symbol.keyFor(symbol)
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')

console.log(sa === sb)

const key = Symbol.keyFor(sa)
const sc = Symbol.for(key)
console.log(sc === sa);