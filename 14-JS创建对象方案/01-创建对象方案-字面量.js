var p1 = {
  name: 'haha',
  age: 20,
  height: 1.88,
  address: '广州市',
  eating: function() {
    console.log(this.name + '在吃东西~');
  },
  running: function() {
    console.log(this.name + '在跑步~');
  }
}
var p2 = {
  name: 'xixi',
  age: 30,
  height: 1.88,
  address: '北京市',
  eating: function() {
    console.log(this.name + '在吃东西~');
  },
  running: function() {
    console.log(this.name + '在跑步~');
  }
}
var p3 = {
  name: 'aiai',
  age: 28,
  height: 1.88,
  address: '上海市',
  eating: function() {
    console.log(this.name + '在吃东西~');
  },
  running: function() {
    console.log(this.name + '在跑步~');
  }
}