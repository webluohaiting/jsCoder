const info = {
  name: 'haha',
  friend: { name: 'heihei'}
}

const obj = { ...info, name: 'aoao' }
console.log(obj) // { name: 'aoao', friend: { name: 'heihei'} }, aoao会覆盖掉原来的

obj.friend.name = 'xixi'

console.log(info.friend.name) // xixi，浅拷贝