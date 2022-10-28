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

// 需求：所有的Promise都变成fulfilled时，再拿到结果
// 意外：在拿到所有结果之前，有一个promise变成了rejected,那么整个promise都是rejected
Promise.all([p1, p2, p3, '444']).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err) // 222
})


