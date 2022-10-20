// ES11之前max_safe_integer,超过最大安全数据，数据可能会出错
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt); // 9007199254740991
console.log(maxInt + 1); // 9007199254740992
console.log(maxInt + 2); // 9007199254740992

// ES11之后：BigInt
const bigInt = 9007199254740991n
console.log(bigInt) // 大整数和小整数是不同类型的，不能相加减相关操作
console.log(bigInt + 10n) // 手动转为大整数，再相加减
// console.log(bigInt + 10) // Cannot mix BigInt and other types, use explicit conversions

// 小整数转为大整数
const num = 100
console.log(bigInt + bigInt(num))

// 大整数转为小整数，不安全，不推荐使用
const smallNum = Number(bigInt)
console.log(smallNum)
