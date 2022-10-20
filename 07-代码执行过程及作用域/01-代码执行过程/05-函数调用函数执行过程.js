var msg = 'global'

function foo() {
  console.log(msg); // global
}

function bar() {
  var msg = 'bar'
  foo()
}

bar()