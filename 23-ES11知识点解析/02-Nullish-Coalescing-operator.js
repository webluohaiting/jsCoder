// 空值合并运算 ??
const foo = undefined
// const bar = foo || 'default value' // '', 0, undefined/null都会用默认值
const bar = foo ?? 'default value' // undefined/null时才使用默认值

console.log(bar)
