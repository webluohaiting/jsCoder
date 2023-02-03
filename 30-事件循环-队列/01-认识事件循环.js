console.log('script start');

setTimeout(() => { // 另一个线程保存回调函数，开始计时

}, 1000)

console.log('后续代码');

console.log('script end');

// js线程先执行script内容
// 另一个线程保存回调函数，开始计时
// 计时一秒结束，将回调函数放入事件队列
// js发现事件队列中有任务，就暂停script内容执行，按先进先出，执行队列中的任务
// 事件队列全部执行完毕后，js继续执行script内容
// 整个闭环过程称为事件循环
