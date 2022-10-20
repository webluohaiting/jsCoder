const obj = {
  name: 'haha',
  age: 20,
  height: 1.88
}

const entries = Object.entries(obj)
console.log(entries);

// 过去只能通过遍历将entries转为obj
// const newObj = {}
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1]
// }
// console.log(newObj);

// 1.ES10中新增了Object.fromEntries()
const newObj = Object.fromEntries(entries)
console.log(newObj);

// 2.Object.fromEntries的应用场景
const queryString = 'name=haha&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj);
