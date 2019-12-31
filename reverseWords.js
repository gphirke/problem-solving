// Given an input string, reverse the string word by word.

/*
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr =  s.split(" ").reverse();
    var revStr = "";
    for(let i=0; i<arr.length; i++){
        if(!arr[i]){
            continue;
        }
        if(revStr.length !== 0){
            revStr = revStr.concat(" "); 
        }
        revStr = revStr.concat(arr[i].trim());
    }
    return revStr;
};


