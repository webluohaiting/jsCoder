// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(222)
    reject(222)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 3000)
})

// allSettled,等所有状态都拿到，fulfilled的返回值放在value，rejected的返回值放在reason
Promise.allSettled([p1, p3, p2, '444']).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// [
//   { "status": "fulfilled", "value": 111 },
//   { "status": "rejected",  "reason": 222 },
//   { "status": "fulfilled", "value": 333 },
//   { "status": "fulfilled", "value": "444" }
// ]