// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.


//reference : https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    var output = [[]];
    for(let ele of nums){
      var subArr = [];
      for (let subEleArr of output) {
         subArr.push([...subEleArr, ele]);   
      }
      for(let curr of subArr) {
          output.push(curr)
      } 
    }
    return output;
};


subsets([1,2,3])

//o/p: 
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]



// 2 solution

function allsubSets(array, result = []) {
    
    var fork = function (i, arr) {
        if (i === array.length) {
            result.push(arr);
            return;
        }
        fork(i + 1, arr.concat([array[i]]));
        fork(i + 1, arr);
    }
    fork(0, []);
    return result;
}
	
console.log(allsubSets([1, 2, 3]));






