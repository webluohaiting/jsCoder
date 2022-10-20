// 1.js中对象是不能使用对象来作为key的
const obj1 = { name: 'haha' }
const obj2 = { name: 'xixi' }

const info = {
  [obj1]: 'aaa',
  [obj2]: 'bbb'
}

console.log(info); // {[object Object]: 'bbb'}，最终都转成字符串[object Object]，所以obj1被覆盖掉了

// 2.Map是允许我们对象类型来作为key的
const map = new Map()
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
map.set(1, 'ccc')

console.log(map)


const map2 = new Map([[obj1, 'aaa'], [obj2, 'bbb'], [2, 'ddd']])
console.log(map2);

// 3.常见的属性和方法
console.log(map2.size);

// set
map2.set('haha', 'eee')
console.log(map2);

// get
console.log(map2.get('haha'));

// has
console.log(map2.has('haha'));

// delete
map2.delete('haha')
console.log(map2);

// clear
// map2.clear()
// console.log(map2);

// 4.遍历map
map2.forEach((item, key) => {
  console.log(item, key);
})

for (const item of map2) {
  console.log(item[0], item[1], item[2])
}

for (const [key, value] of map2) {
  console.log(key, value)
}