Function.prototype.hybind = function(thisArg, ...argArray) {
  var fn = this // 指向sum函数
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)
  function proxyFn(...args) {
    thisArg.fn = fn // 改变this指向为thisArg
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }
  return proxyFn // 将操作放到一个函数，返回这个函数
}

function sum(num1, num2) {
  console.log('sum被执行了', this);
  return num1 + num2
}

var foo = sum.hybind('abc', 1, 2) // proxyFn
var res = foo(3, 4) // proxyFn(1, 2), 执行sum函数，this指向'abc'
console.log(foo, res);