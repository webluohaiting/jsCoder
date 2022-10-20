function add1(x, y, z) {
  return x + y + z
}

function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function makeAdder(count) {
  count = count * count
  return function(num) {
    return count + num
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}

// 柯里化函数的实现mycurrying
function myCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收的参数个数是否等于函数本身需要的参数
    // 1.如果传入的参数已经大于等于函数需要的参数，则可以执行原始函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 2.没有到达个数时，需要返回一个新的函数，继续接收参数
      function curried2(...args2) {
        // 接收到参数后，需要递归调curried用来检查参数是否已经足够，可以执行原始函数了
        return curried.apply(this, [...args, ...args2])
      }
      return curried2
    }
  }
  return curried
}

var curryAdd = myCurrying(add1)
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))
