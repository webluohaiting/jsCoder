const num1 = 100 // 十进制
const num2 = 0b100 // 二进制, b=>binary, 2的平方 = 4
const num3 = 0o100 // 八进制, o=>octonary，8的平方 = 64
const num4 = 0x100 // 十六进制, x=>hexadecimal，16的平方 = 256


// 大的数值的连接符,ES2021,ES12
const num = 10_000_000 // 相当于10,000,000

console.log(num1, num2, num3, num4, num);