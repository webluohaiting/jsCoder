// var: variable(变量)
var foo = 'foo'

let bar = 'bar'

// const: constant(常量/衡量)
const name = 'abc'
// name = 'aaa' // 错误，不可修改


// 1.const本质上传递的值是不可以修改的
// 但是可以修改对象里面的属性值
const obj = {
  foo: 'foo'
}

// obj = {} // 错误，obj不可修改
obj.foo = 'aaa' // 正确，obj存储的内存地址未被修改



// 2.通过let/const定义的变量名是不可以被重复定义的
var foo = 'foo'
var foo = 'aaa' // 正确，foo可被重新定义


let bar = 'bar'
let bar = 'bbb' // 错误，bar不可被重新定义