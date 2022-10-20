function foo(num1, num2, num3) {
  console.log(arguments);

  // 常见的对arguments的操作有3个：
  // 1.获取参数的长度
  console.log(arguments.length);

  // 2.根据索引值获取某一个参数
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
}

foo(10, 20, 30, 40, 50)