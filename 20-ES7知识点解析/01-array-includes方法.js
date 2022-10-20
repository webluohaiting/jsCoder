const names = ['aaa', 'bbb', 'ccc', NaN]

if (names.indexOf('ccc') !== -1) {
  console.log('包含ccc元素');
}

// ES7 ES2016
if (names.includes('aaa', 1)) { // 从1开始寻找
  console.log('包含aaa元素');
}

if (names.indexOf(NaN) !== -1) {
  console.log('包含NaN');
}

if (names.includes(NaN)) { // 从1开始寻找
  console.log('包含NaN'); 
}
