//algorithm to find length of longest common subsequence.

//A subsequence is a sequence that appears in the same relative order, 
//but not necessarily contiguous. 

//For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. 


////Algorithm
/*    P = "AABCD",  Q = "AASED" ;
 case 1 : P0 = ".....X",  Q0 = "....X"
        1 + LCS(p0, Q0);

 case 2 : P0 = "....P1....X", Q0 = ".....Q1.....Y"

      1 + Max(LCS(P0, Q1), LCS(P1, Q0));

 */



var result = 0;
function LCS(str1, str2){
    var m = str1.length, n = str2.length;   
    if(m == 0 || n == 0){
       return 0;
    }
    if(str1[m-1] === str2[n-1]){
        result = 1 + LCS(str1.substr(0, str1.length - 1), str2.substr(0, str2.length - 1));
    }

    if(str1[m-1] !== str2[n-1]){
        result =Math.max(LCS(str1.substr(0, str1.length - 1), str2),LCS(str1, str2.substr(0, str2.length - 1)));
    }
    return result;

}

console.log(LCS("AABCD", "AASED"));
