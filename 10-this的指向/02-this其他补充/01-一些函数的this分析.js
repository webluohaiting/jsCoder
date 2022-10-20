// 1.setTimeout（this指向window)
// function hySetTimeout(fn, duration) {
//   fn() // window
// }
// hySetTimeout(function() {
//   console.log(this); // window
// }, 3000)

// setTimeout(function() {
//   console.log(this); // window
// }, 3000)

// 2.监听点击（this指向监听的dom)
// const boxDiv = document.querySelector('.box')
// boxDiv.onclick = function() {
//   console.log(this); // div对象
// }

// 3.数组：forEach/map/filter/find(默认this指向window,传参第二个参数可以改变this指向)
var names = ['aaa', 'bbb', 'ccc']
names.forEach(function(item) {
  console.log(item, this);
}, 'abc')