class myError {
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode
    this.errorMessage = errorMessage
  }
}

function foo(type) {
  console.log('foo开始执行');

  if (type === 0) {
    // 1.抛出一个字符串类型（基本数据类型）
    // throw 'type不能为0'

    // 2.比较常见的是抛出一个对象类型
    // throw { errorCode: -1001, errorMessage: 'type不能为0' }

    // 3.创建类，并且创建这个类对应的对象
    // throw new myError(-1001, 'type不能为0')

    // 4.提供的Error
    // const err = new Error('type不能为0')
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err.stack);
    // throw err

    // 5.Error的子类
    const err = new TypeError('当前type类型是错误的')
    throw err

    // 强调：如果函数中已经抛出了异常，后续代码不会再继续执行
    console.log('foo后续的代码');
  }

  console.log('foo结束执行');
}

foo(0)
