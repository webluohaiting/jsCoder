function foo(m, n) {
  console.log('-----', m, n);
}

// foo('hello', 'world')

// 另外调用函数的方式：标签模板字符串
// foo``

// foo`hello world` // ['hello world'] undefined

const name = 'haha'
const age = 12
foo`hello${name} wor${age}ld` // ['hello', ' wor', 'ld'] haha
