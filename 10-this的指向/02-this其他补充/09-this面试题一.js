var name = 'window'
var person = {
  name: 'person',
  sayName: function() {
    console.log(this.name);
  }
}
function sayName() {
  var sss = person.sayName;
  sss(); // window,独立函数调用
  person.sayName(); // person，隐式调用
  (person.sayName)(); // person,相当于person.sayName()，隐式调用
  (b = person.sayName)(); // window,间接函数调用，(b = person.sayName)返回一个function,对function进行独立调用
}
sayName()