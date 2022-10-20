const msg = 'Hello World'

// padStart(总共多少位数， 填充内容默认为空格)
const newMsg = msg.padStart(15, '*').padEnd(20, '-')
console.log(newMsg); // ****Hello World-----

// 案例:身份证
const cardNumber = '123456789123456789123456789'
const laseFourCard = cardNumber.slice(-4)
const finalCard = laseFourCard.padStart(cardNumber.length, '*')
console.log(finalCard);