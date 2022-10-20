const obj = {
  name: 'why',
  age: 20
}

console.log(Object.entries(obj)); // 转为Map,[['name', 'why'], ['age', 20]]

const objEnteries = Object.entries(obj)
objEnteries.forEach(item => {
  console.log(item[0], item[1]);
})


console.log(Object.entries(['aaa', 'bbb', 'ccc'])) // [['0', 'aaa'], ['1', 'bbb'], ['2', 'ccc']]
console.log(Object.entries('abc')) // [['0', 'a'], ['1', 'b'], ['2', 'c']]

