// 1.逻辑或赋值运算：||=
let message1 = undefined
// message = message || 'default value'
message1 ||= 'default value'
console.log(message1);

// 2.逻辑与赋值运算：&&=
let info = {
  name: 'haha'
}
// info = info && info.name 
info &&= info.name
console.log(info);

// 3.逻辑空赋值运算：??=
let message2 = ''
// message2 ||= 'default value' // 不能正确判断0， ''
message2 ??= 'default value' 
console.log(message2);

