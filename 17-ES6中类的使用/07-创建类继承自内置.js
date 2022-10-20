class MyArray extends Array {
  firstItem() {
    return this[0]
  }
  lastItem() {
    return this[this.length - 1]
  }
}

var arr = new MyArray(1, 2, 3)

console.log(arr.firstItem());
console.log(arr.lastItem());