///Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count = 0;
    for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<=nums.length; j++){
        let sum = 0;
          for(let k=i; k<j; k++){
            sum = sum + nums[k];
          }
          if(sum == k){
              count++;
          }
      }  
    }
    return count;
};



