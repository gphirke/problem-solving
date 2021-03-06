function bubleSort1(a){
    let numberOfSwaps = 0;
    for (let i = 0; i < a.length; i++) {
    // Track number of elements swapped during a single array traversal
    
        for (let j = 0; j < a.length; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] < a[j + 1]) {
                const temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                numberOfSwaps++;
            }
        }
    
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    return a; //return a if o/p should be sorted array
    // return numberOfSwaps; //return numberOfSwaps if o/p should be min numberOfSwaps
}

//bubleSort([3,2,1]);

bubleSort1([3, 4, 1, 2]);


// URL https://www.youtube.com/watch?v=6Gv8vg0kcHc


function swap(i, j, arr){
	var temp =  arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function bubleSort(arr){
	var isSorted=false;
	var lastIndx = arr.length - 1;
	while(!isSorted){
		isSorted = true;
		for(let i=0; i<lastIndx; i++){
			if(arr[i]<arr[i+1]){
				swap(i, i+1, arr);
				isSorted = false;
			}
		}
		--lastIndx;
	}
}

var arr = [3, 2, 9, 6, 5, 4];

bubleSort(arr);

console.log(arr);
