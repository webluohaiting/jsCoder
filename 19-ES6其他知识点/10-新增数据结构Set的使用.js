// 1.创建一个Set结构
const set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(40)

// 2.添加对象时特别注意：
set.add(10) // 元素不能重复，不会添加成功

set.add({})
set.add({}) // 能添加成功，不同的对象


const obj = {}
set.add(obj)
set.add(obj) // 不能添加成功，同一个对象

console.log(set)

// 3.对数组去重（去除重复的元素）
const arr = [10, 20, 30, 40, 10]
const arrSet = new Set(arr) // 返回一个Set数据结构对象
const newArr = Array.from(arrSet) // 转为数组形式

// const newArr = [...arrSet] // 展开运算符也能将其转为数组形式
console.log(newArr)

// 4.size属性（类似length属性）
console.log(arrSet.size)

// 5.方法
// 5.1 add
arrSet.add(100)

// 5.2 delete
arrSet.delete(10)

// 5.3 has
console.log(arrSet.has(10))

// 5.4 clear
// arrSet.clear()

// 5.5 forEach/of
arrSet.forEach(item => {
  console.log(item);
})

for (const item of arrSet) {
  console.log(item)
}