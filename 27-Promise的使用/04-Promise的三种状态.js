/**
 * Promise三种状态：
 * pending: 待定
 * fulfilled: 已敲定/兑现状态
 * rejected: 已拒绝状态
 * */
const promise = new Promise((resolve, reject) => {

})
promise.then(res => {

}, err => {

})

// 完全等价于下面的代码

// 注意：状态一旦确定下来，那么就是不可更改的（锁定）
new Promise((resolve, reject) => {
  // pending状态：待定
  console.log('----');
  resolve() // 处于fulfilled状态（已敲定/兑现状态）
  reject() // 处于rejected状态（已拒绝状态），先执行了resolve()，状态已锁定，不会再执行后面的
}).then(res => {
  console.log('res', res);
}, err => {
  console.log('err', err);
})
