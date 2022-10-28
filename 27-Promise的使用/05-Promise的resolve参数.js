/** 
 * resolve(参数)
 * 1.普通的值或者对象
 * 2.Promise:
 * 3.特殊对象then： { then: function(resolve, reject) { resolve() } }
 * */

// 1.普通的值或者对象
new Promise((resolve, reject) => {
  resolve('成功啦')
  // reject('失败啦')
}).then(res => {
  console.log('res', res); // res, 成功啦
}, err => {
  console.log('err', err); // err, 失败啦
})


// 2.传入一个Promise:
// 后面的then将由新传入的Promise的resolve和reject决定,相当于状态进行了移交
const newPromise = new Promise((resolve, reject) => {
  // resolve('newPromise成功了')
  resolve('newPromise失败了')
})
new Promise((resolve, reject) => {
  resolve(newPromise)
}).then(res => {
  // 将由newPromise的状态决定
  console.log('res', res);  // res, newPromise成功了
}, err => {
  console.log('err', err); // err, newPromise失败了
})


// 3.传入一个对象，并且这个对象有实现then方法
// 那么也会执行该then方法，并且由该then方法决定后续状态
new Promise((resolve, reject) => {
  const obj = {
    then: function(resolve, reject) {
      resolve('then成功啦')
      // reject('then失败啦')
    }
  }
  resolve(obj) // 会自动执行obj的then方法
}).then(res => {
  // obj的then方法中的状态决定
  console.log('res', res);  // res, then成功啦
}, err => {
  console.log('err', err); // err, then失败啦
})
