// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(111)
    reject(111)
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
    // resolve(333)
    reject(333)
  }, 3000)
})

// any：必须等到一个resolve的结果才结束，如果全部都是reject,则执行catch
Promise.any([p1, p2, p3]).then(res => {
  console.log('res', res) // 111
}).catch(err => {
  console.log('err', err.errors) // 通过errors拿到结果
})
