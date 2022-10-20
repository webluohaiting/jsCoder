function foo() {

}

const fooProxy = new Proxy(foo, {
  apply: function(target, thisArg, arrArray) {
    console.log('对foo函数进行了apply的调用')
    return target.apply(thisArg, arrArray)
  },
  construct: function(target, arrArray) {
    console.log('对foo函数进行了new的调用')
    return new target(...arrArray)
  }
})

fooProxy.apply({}, [1, 2])
new fooProxy(123)

