
// Ref URL: https://www.youtube.com/watch?v=SLauY6PpjW4


var swap = function(i, j, arr){
	var temp =  arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}


var partition = function(arr, left, right, pivotVal){
	while (left <= right) {
		while (arr[left]<pivotVal) {
			left++;
		}
		while (arr[right]>pivotVal) {
			right--;
		}

		if(left <= right) {
			swap(left, right, arr);
			left++;
			right--;
		}
	}
	return left;		
}

function QuickSort(arr) {
	var quickSort = function(arr, left, right){
		if (left >= right){
			return;
		}

		var pivotVal = arr[Math.floor((left + right)/2)];
		var indx = partition(arr, left, right, pivotVal);
		quickSort(arr, left, indx-1);
		quickSort(arr, indx, right);

	}
	quickSort(arr, 0, arr.length-1);
}


var arr1 = [3, 2, 9, 6, 5, 4];
QuickSort(arr1);

console.log(arr1);
