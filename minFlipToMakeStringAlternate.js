function minFlipToMakeStringAlternate(arr){
  var checkFlip = function(flip){
    var count = 0;
    for(let i=0, len = arr.length; i < len; i++){
      if(arr[i] != flip){
        ++count;
      }
      flip = !flip;
    }
    return count;
  };
  
  return Math.min(checkFlip(0), checkFlip(1));
}

console.log(minFlipToMakeStringAlternate([1,1,1,1,1, 0]));  //o/p will be 2 to make  [1,0,1,0,1, 0]


// 2nd solution

function minFlipToMakeStringAlternate(arr){
	var flip = arr[0];
	var count = 0;

	var checkFlip = function(f) {
		var flip = f;
		for(let i=1; i<arr.length; i++){
			if(arr[i] != flip){
				++count;
			}
			flip = !flip;
	 }
	 return count;	
	}	

	if (flip == 1) {
	 return checkFlip(0);
	}

  if (flip == 0) {
	 return	checkFlip(1);
	}
}


console.log(minFlipToMakeStringAlternate([0,1,1,1,1, 0])); 
