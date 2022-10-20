function createFnArray() {
  // 长度1024*1024，fill方法填充1
  // 一个整数4个字节：1024*1024*4 = 4M
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length);
  }
}

// var arrayFn = createFnArray()
// arrayFn()


// 通过浏览器performance观察内存变化
var arrayFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i * 100)
  // arrayFns.push(createFnArray())
}

// arrayFns = null
for (var i = 0; i < 50; i++) {
  setTimeout(() => {
    arrayFns.pop()
  }, i * 100)
}

