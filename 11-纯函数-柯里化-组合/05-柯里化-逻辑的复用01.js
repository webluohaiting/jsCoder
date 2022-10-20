function sum(m , n) {
  return m + n
}

console.log(sum(5, 10));
console.log(sum(5, 14));
console.log(sum(5, 100));
console.log(sum(5, 50));

// 可以对逻辑进行复用
function makeAdder(count) {
  return function(num) {
    return count + num
  }
}

var adder5 = makeAdder(5)
adder5(10)
adder5(14)
adder5(100)
adder5(50)
