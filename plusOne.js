//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

//You may assume the integer does not contain any leading zero, except the number 0 itself.

//Example 1:

//Input: [1,2,3]
//Output: [1,2,4]
//Explanation: The array represents the integer 123.

//Example 2:

//Input: [4,3,2,1]
//Output: [4,3,2,2]
//Explanation: The array represents the integer 4321.


function plusOne(arr){
	var carry = 0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] < 9){
			arr[i] = ++arr[i];
			return arr;			
		}else{
			arr[i] = 0;
			carry  = 1;
		}

	}
	if(carry > 0){
		arr.unshift(carry);
	}
	return arr;
}

plusOne([1,2,3]);

plusOne([9,9,9]);


