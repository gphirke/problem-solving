/*the Hamming distance between two strings of equal length 
 *is the number of positions at which the corresponding character are different.
 */

function hammingDistance(str1, str2){
 // base condition
  if(str1.length != str2.length){
    throw new Error("strings are not of same length.");
  }
  var distance = 0;
  for(var i=0, len = str1.length; i < len; i++){
    if(str1[i] != str2[i]){
      distance = + 1;
    }
  }
  return distance;
}
hammingDistance("hammingdist", "hammingleng");
