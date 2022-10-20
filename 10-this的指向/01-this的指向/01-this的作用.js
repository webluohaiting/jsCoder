var obj = {
  name: 'haha',
  eating: function() {
    console.log(this.name + '在吃东西');
  },
  running: function() {
    console.log(this.name + '在跑步');
  },
  studying: function() {
    console.log(this.name + '在学习');
  }
}

obj.eating()
obj.running()
obj.studying()


var info = {
  name: 'xixi',
  eating: function() {
    console.log(this.name + '在吃东西');
    console.log(info.name + '在吃东西'); // 当改变obj名称的时候，使用this，不需要重复修改
  },
  running: function() {
    console.log(this.name + '在跑步');
  },
  studying: function() {
    console.log(this.name + '在学习');
  }
}

info.eating()
info.running()
info.studying()
