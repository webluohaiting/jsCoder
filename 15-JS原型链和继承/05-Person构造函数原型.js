function Person() {

}

// console.log(Person.prototype.constructor); // Person构造函数
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.prototype.__proto__) // 顶层原型Object的prototype
console.log(Person.prototype.__proto__.__proto__) // null