// rest parameters
function sum(...args) {
  console.log(args);
}

sum(10, 20, 30)
sum(10, 20, 30, 40)

// 展开运算符spread
var names = ['aaa', 'bbb', 'ccc']
sum(...names)