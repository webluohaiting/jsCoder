const obj = {
  name: 'haha',
  age: 20
}

// Object.defineProperty(obj, 'name', {
//   get: function(val) {
//     console.log('被访问了');
//     return val
//   },
//   set: function() {
//     console.log('被设置了');
//   }
// })


Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`${key}被访问了`);
      return value
    },
    set: function(newValue) {
      console.log(`${key}被设置了`);
      value = newValue
    }
  })
})


obj.name = 'xixi'
obj.age = 40

console.log(obj.name);
console.log(obj.age);