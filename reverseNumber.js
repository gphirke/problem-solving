var reverse = (function(x) {
  let revNum=0;
  let y = Math.sign(x)*x;
  while(y != 0){
    revNum = (revNum*10) + (y%10);
    y = Math.floor(y/10);
  };
  if(revNum > (2**31 -1)){
    return 0
  }
  return Math.sign(x) * revNum;
}(123));

console.log(reverse);
