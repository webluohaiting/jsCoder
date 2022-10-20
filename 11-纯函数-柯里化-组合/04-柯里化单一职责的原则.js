function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

console.log(add(10, 20, 30));

// 柯里化的单一职责原则：
// 对每个参数进行单独处理
function sum(x) {
  x = x + 2

  return function(y) {
    y = y * 2

    return function(z) {
      z = z * z

      return x + y + z
    }
  } 
}