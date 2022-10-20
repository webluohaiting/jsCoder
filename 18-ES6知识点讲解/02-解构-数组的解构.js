var names = ['aaa', 'bbb', 'ccc']

// 对数组的结构：[]
var [item1, item2, item3] = names
console.log(item1, item2, item3);


// babel转化
// var names = ['aaa', 'bbb', 'ccc'];
// var item1 = names[0],
//     item2 = names[1],
//     item3 = names[2];
// console.log(item1, item2, item3);


// 解构后面的元素:一个对应一个元素
var [, itemb, itemc] = names
console.log(itemb, itemc);

// 解构出一个元素，其他后面的放到一个新数组
var [itema, ...newNames] = names
console.log(itema, newNames)

// 解构的默认值
var [itema, itemb, itemc, itemd = 'zzz'] = names
console.log(itemd)