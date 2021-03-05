function printZigZagPattern(num){
  var flip = true;
  var spaces = 1;
  var j =1;
  while(j <= num) {
    var str = ""
    var rev = j + spaces;
    for (let i=0; i<spaces; i++) {
      if (flip) {
        str = str + (rev - i - 1) + " ";
      }else {
         str = str +  j + " "; 
      }
      j++;
      if (j>num) {
        break;
      }
    }
    flip = !flip;
    spaces++;
    console.log(str);
  }
}


printZigZagPattern(17)
