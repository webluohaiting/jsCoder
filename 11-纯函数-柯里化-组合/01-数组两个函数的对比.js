var names = ['aaa', 'bbb', 'ccc', 'ddd']

// slice创建了一个newArr去接收截取后的数组，不会改变原来的数组
// slice只要给他传入一个start/end，那么对于同一个数组来说，它会给我们返回确定的值
// slice函数本身就是一个纯函数
// var newNames1 = names.slice(0, 3)

// console.log(newNames1); // ['aaa', 'bbb', 'ccc']
// console.log(names); // ['aaa', 'bbb', 'ccc', 'ddd']

// splice在执行时，有修改掉调用的数组对象本身，修改的这个操作就是产生的副作用
// splice不是纯函数
var newNames2 = names.splice(2)

console.log(newNames2); // ['ccc', 'ddd']
console.log(names); // ['aaa', 'bbb']