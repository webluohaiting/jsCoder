async function foo() {
  console.log('foo start~~~');

  console.log('内部的代码执行1');
  console.log('内部的代码执行2');
  console.log('内部的代码执行3');

  console.log('foo end~~~');
}

console.log('script start');
foo()
console.log('script end');
