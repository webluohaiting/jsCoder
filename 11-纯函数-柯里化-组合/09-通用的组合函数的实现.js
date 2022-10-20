/**
 * 思路：传入多个函数，按顺序执行，将执行结果作为参数传递给下一个执行函数（即square(double(num))）
 * 1.传入多个函数...fns，返回一个函数compose
 * 2.newFn传入参数执行（即执行返回函数compose）
 * 3.compose函数中执行第一个函数参数var result = fns[0]()（即var result = double(num)）
 * 4.并将结果作为参数，执行下一个函数fns[1](result)（即result = square(result)）
 * 5.循环执行至...fns的函数都执行完毕，最后返回结果
 * */
function myCompose(...fns) {
  var length = fns.length
  for(var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }
  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while(++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}

function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var newFn = myCompose(double, square)

console.log(newFn(10))