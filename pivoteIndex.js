//Given an array of integers nums, write a method that returns the "pivot" index of this array.

//We define the pivot index as the index where the sum of the numbers to the left of the index
//is equal to the sum of the numbers to the right of the index.

//If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
        var sum = 0, leftsum = 0;
        for (var x in nums) {
          sum += nums[x];
        }
        for (var i = 0; i < nums.length; ++i) {
            if (leftsum == sum - leftsum - nums[i]) return i;
            leftsum += nums[i];
        }
        return -1;
};

//Time Complexity: O(n), where n is the length of nums.

//Space Complexity: O(1), the space used by leftsum and sum.
