async function foo() {
  console.log('foo start~~~');

  console.log('中间代码~~~');

  // 异步函数中的异常，会被作为异步函数返回的Promise的reject值
  throw new Error('error messsage')

  console.log('foo end~~~');
}

console.log('script start~~~');

foo().catch(err => {
  console.log('我的错误', err);
})

console.log('script end~~~');
