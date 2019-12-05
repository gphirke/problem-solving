//Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// reference : https://leetcode.com/problems/sum-of-two-integers/

function getSum(a, b){
  while(b!=0){
    var carry = a&b;  //calculate if is there any carry we need to add
    a = a^b;   // a is used to hold the sum
    b = carry<<1;  //b is used to hold the sum 
  }
  return a;
}
