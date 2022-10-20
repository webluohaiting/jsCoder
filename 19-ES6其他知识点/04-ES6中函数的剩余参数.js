// rest paramaters剩余参数必须放到最后
function foo(m, n, ...args) {
  console.log(m, n) // 20, 30
  console.log(args) // args是一个数组, [40, 50, 60]
  console.log(arguments) // arguments是一个对象
}

foo(20, 30, 40, 50, 60)