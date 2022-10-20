class Person {
  constructor(name, age) {
  	this.name = name
    this.age = age
  }
  eating() {
  	console.log(this.name + ' eating')
  }
}

// babel转换
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// /*#__PURE__*/纯函数
// webpack压缩时，有一个tree-shaking
// 这个函数没有副作用，所以没有使用时，可以通过tree-shaking摇掉，不压缩，减少压缩包大小
var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "eating",
    value: function eating() {
      console.log(this.name + ' eating');
    }
  }]);

  return Person;
}();

