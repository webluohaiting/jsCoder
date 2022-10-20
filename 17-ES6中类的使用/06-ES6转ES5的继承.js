// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   running() {
//     console.log(this.name + ' running')
//   }
// }

// class Student extends Person {
//   constructor(name, age, sno) {
//     super(name, age)
//     this.sno = sno
//   }
//   studying() {
//     console.log(this.name + ' studying');
//   }
// }

// babel转化
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function (obj) { return typeof obj; } :
    function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ?
      "symbol" : typeof obj;
    }, _typeof(obj);
}

// 继承：通过Object.create，让subClass.prototype指向superClass.prototype生成的实例对象
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ?
    Object.setPrototypeOf.bind() :
    function _setPrototypeOf(o, p) {
      // 为了静态方法的继承
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    // Derived为Student,通过_getPrototypeOf获取其原型对象
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      // Super: Person, arguments: ['haha', 20], NewTarget: Student
      // 会通过Super创建出来一个实例，但是这个实例的原型constructor指向的是newTarget
      // 即通过Person创建一个实例，但是constructor指向Student(类似借用构造函数)
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; }
  else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
    return true;
  } catch (e) {
    return false;
  }
}

// 获取构造函数的原型对象
function _getPrototypeOf(o) {
  _getPrototypeOf =
    Object.setPrototypeOf ?
      Object.getPrototypeOf.bind() :
      function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

// 让构造函数不被当成普通函数随意调用，只能通过new调用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// 通过遍历方法数组，为原型对象prototype添加方法
function _defineProperties(target, props) {
  // target为原型对象, props为方法数组
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

// 为构造函数的原型对象添加传入的方法
function _createClass(Constructor, protoProps, staticProps) {
  // Constructor：Person, protoProps: 方法数组, staticProps：静态方法数组
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "running",
    value: function running() {
      console.log(this.name + ' running');
    }
  }]);

  return Person;
}();

var Student = /*#__PURE__*/function (_Person) {
  // 实现之前的寄生组合式继承方法（添加了静态方法的继承）
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, sno) {
    var _this;
    
    _classCallCheck(this, Student);
    debugger
    // 类似借用构造函数，创建出来的对象 { name, age }，赋值给_this
    _this = _super.call(this, name, age);
    _this.sno = sno;
    return _this;
  }

  _createClass(Student, [{
    key: "studying",
    value: function studying() {
      console.log(this.name + ' studying');
    }
  }]);

  return Student;
}(Person);

var stu = new Student('haha', 20, 30)