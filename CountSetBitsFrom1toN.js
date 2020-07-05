function toBinary(n){
    let binary = "";
    while(Math.ceil(n/2) > 0){
        binary = n%2 + binary;
        n = Math.floor(n/2);
    }
    return binary;
}

function countSetBits(n){
   let binStr = String(n); 
   let count = 0;
   for(let i=0; i<binStr.length; i++){
       if(n[i] == "1"){
            ++count;
       } 
   }
   return count;
}

function CountSetBitsFrom1toN(n){
   let numOfSetBits = 0;
   for(let i=1; i<=n; i++){
    numOfSetBits = numOfSetBits + countSetBit(toBinary(i));
   }
   return numOfSetBits;
}

console.log(CountSetBits(5));
