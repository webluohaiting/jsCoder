Function.prototype.hyapply = function(thisArg, argArray) {
  var fn = this
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)
  thisArg.fn = fn
  argArray = argArray || []
  var result = thisArg.fn(...argArray) // argArray为空时处理，为空时无法使用展开运算符，会报错
  delete thisArg.fn
  return result
}

function sum(num1, num2) {
  console.log('sum函数被执行', this);
  return num1 + num2
}

var res = sum.hyapply('abc', [1, 2])
console.log(res);
sum.hyapply('abc')