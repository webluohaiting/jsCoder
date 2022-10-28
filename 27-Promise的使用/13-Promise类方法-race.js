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

// race:拿到第一个执行结束的promise，无论catch还是then，就结束
Promise.race([p1, p3, p2]).then(res => {
  console.log(res) // 111
}).catch(err => {
  console.log(err)
})