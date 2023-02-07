// 函数出现错误，正确做法要让调用者修复错误，而不是规避
function sum(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw 'parameters is error type~'
  }
  return num1 + num2
}

console.log(sum({ name: 'haha' }, true));

