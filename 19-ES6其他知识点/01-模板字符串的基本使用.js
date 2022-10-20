const name = 'haha'
const age = 19
const height = 1.99

// ES6提供模板字符串
const message = `My name is ${name}, age is ${age}, height is ${height}`
console.log(message);

const info = `age double is ${age * 2}`
console.log(info);

function doubleAge() {
  return age * 2
}

const info2 = `age double is ${doubleAge()}`
console.log(info2);