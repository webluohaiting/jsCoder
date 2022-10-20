var obj = { name: 'haha' }

console.log(obj.address);

// 字面量对象obj的原型是[Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型

console.log(obj.__proto__) // [Object: null prototype] {}

console.log(obj.__proto__.__proto__) // null

// 对象的顶层原型就是Object.prototype，而Object.prototype的__proto__为null
