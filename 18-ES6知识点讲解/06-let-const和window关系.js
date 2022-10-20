// var foo = 'foo'
// var message = 'hello world'

// console.log(window.foo)
// console.log(window.message)

// window.message = '哈哈哈'
// console.log(message)

let foo = 'foo'
console.log(window.foo) // undefined

// 历史遗留问题：ES6以前全局执行上下文中VO指向GO, GO里存储全局定义的属性，而window === GO,所以在全局定义的属性，可以通过window访问
// ES6以后，VO改为VE,通过一个variables_:variableMap存储全局属性，window与GO不再指向同一个对象，为解决这个历史问题，通过var定义的属性仍旧会加到window对象中，单通过let/const定义的不会
