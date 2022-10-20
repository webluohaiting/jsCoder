const info = {
  name: 'haha',
  // friend: {
  //   name: 'xixi',
  //   girlFriend: {
  //     name: 'aoao'
  //   }
  // }
}

// console.log(info.friend.girlFriend.name);

// ES11提供了可选链（optional chaining）: ?.
console.log(info?.friend?.girlFriend?.name); // 如果info没有，则不执行后面的；其他同理
