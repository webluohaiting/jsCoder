// 获取某个环境下的全局对象（Global Object)

// 在浏览器下
// console.log(window); // 全局对象
// console.log(this) // 也是window

// 在node下
// console.log(this); // {}
// console.log(global) // 全局对象

// ES11
console.log(globalThis) // 不同环境下都显示全局对象