var a = 100
console.log(a);
function foo() {
  console.log(a); // undefined, 预解析时下面的var a=undefined
  return
  var a = 100 // 此处不执行，但会进行预解析
}

foo()
