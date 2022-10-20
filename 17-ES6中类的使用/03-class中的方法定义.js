var names = ['aaa', 'bbb', 'ccc']
class Person {
  // 1.构造方法：每个实例对象属性都是不一样的(即之前构造函数的函数体)
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = '广州市'
  }

  // 2.类定义的方法：所有实例对象是共享的(即定义在Person.prototype)
  eating() {
    console.log(this.name + ' eating');
  }
  running() {
    console.log(this.name + ' running');
  }

  // 3.类的访问器方法（存取属性描述符）
  get address() {
    console.log('拦截访问操作');
    return this._address
  }
  set address(newAddress) {
    console.log('拦截设置操作');
    this._address = newAddress
  }

  // 4.类的静态方法(类方法),最终添加到构造函数上，而不是原型上
  // 通过构造方法访问：Person.randomPerson()
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

var p = new Person('aoao', 10)

p.eating()
p.running()


var p1 = new Person('haha', 20)
var p2 = new Person('xixi', 30)
console.log(p1.eating === p2.eating); // true


console.log(p.address);

console.log(Person.eating); // undefined, 普通方法没办法直接访问

var p3 = Person.randomPerson() // 静态方法才能直接访问
console.log(p3);



console.log(Object.getOwnPropertyDescriptors(p)); // name, age, _address
console.log(Object.getOwnPropertyDescriptors(Person.prototype)); // constructor, eating, running, address
console.log(Object.getOwnPropertyDescriptors(Person)); // prototype, randomPerson
