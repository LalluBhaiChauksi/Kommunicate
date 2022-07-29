const reverseNum = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 8);

const num=789;
console.log(reverseNum(num));
