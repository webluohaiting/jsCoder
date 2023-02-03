// 数组
const names = ['aaa', 'bbb', 'ccc']

console.log(names[Symbol.iterator]);

const iterator1 = names[Symbol.iterator]()
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

for (const item of names) {
  console.log(item)
}


// Map/Set
const set = new Set()
set.add(10)
set.add(100)
set.add(1000)

console.log(set[Symbol.iterator]);

const iterator2 = set[Symbol.iterator]()
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

for (const item of set) {
  console.log(item)
}


// 函数中的arguments也是一个可迭代对象
function foo(x, y, z) {
  const iterator3 = arguments[Symbol.iterator]()
  console.log(iterator3.next());
  console.log(iterator3.next());
  console.log(iterator3.next());
  console.log(iterator3.next());

  for (const item of arguments) {
    console.log(item)
  }
}

foo(10, 20, 30)

