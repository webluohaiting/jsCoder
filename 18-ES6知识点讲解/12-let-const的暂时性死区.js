var foo = 'foo'
if (true) {
  console.log(foo) // 不能在声明之前使用变量，称为暂时性死区

  let foo = '12333'
}

function func() {
  console.log(bar) // 不能在声明之前使用变量，称为暂时性死区
  let bar = '123'
}
