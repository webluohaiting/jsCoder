Promise.resolve().then(() => {
  console.log(0);
  // 1.直接return一个值，相当于resolve(4)
  // return 4 // 0142356

  // 2.return thenable的值：推迟一次微任务
  // return {
  //   then: function(resolve) {
  //     resolve(4) // 0124356
  //   }
  // }

  // 3.return promise：推迟两次微任务
  // return Promise.resolve(4) // 0123456

  return new Promise(resolve => {
    resolve(4)
  })
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})

console.log(new Promise(resolve => {
  resolve(4)
}));
