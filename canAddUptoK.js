//Given a list of numbers and a number <code> k </code>, 
//return whether any two numbers from the list add up to <code> k </code>.
//For example, given <code> [10, 15, 3, 7]</code> and <code>k</code> of <code>17</code>, 
//return true since 10 + 7 is 17. */

function canAddUptoK_1(arr, k){
    for(var i=0, len = arr.length; i<len; i++){
       var indx = arr.indexOf(k-arr[i]);
       if(arr.indexOf(indx) > -1 && indx != i){
           return true
       }
    }
    return false;
}

console.log("Using Array indexOf: "+ canAddUptoK_1([15, 10, 3, 7], 17));

function canAddUptoK_2(arr, k){
    var obj = {};
    for(var i=0, len = arr.length; i<len; i++){
       if(obj[k - arr[i]]){
           return true
       }else{
           obj[arr[i]] = 1;
       }
    }
    return false;
}
console.log("Using Object: "+ canAddUptoK_2([15, -10, 3, -7], -17));
