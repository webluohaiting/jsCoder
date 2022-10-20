const btns = document.getElementsByTagName('button')

// for (var i = 0; i < btns.length; i++) {
//   (function(i) {
//     btns[i].onclick = function() {
//       // 该函数会去上层作用域找i,即全局作用域，此时i已经是4
//       // 所以使用闭包，每个作用域的i都是不同的。
//       console.log('第' + i + '个按钮被点击');
//     }
//   })(i)
// }
// console.log(i)

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    // 该函数会去上层作用域找i, 即for的块级作用域，每次循环产生的i都不同
    console.log('第' + i + '个按钮被点击');
  }
}

// console.log(i)
