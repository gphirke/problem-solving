array = [1, 2,4, 5, 6, 7,3,10];
fn (5, array) => (1,4), (2,3)

function getAllPair(n, arr){
	var obj = {};
	var pairs = [];
	for(let ele of arr){
		let diff = n - ele;
		if(!obj[diff]){
			obj[ele] = 1;
		}else {
			pairs.push([ele, diff]);
			delete obj[diff];
		}
	}
	return pairs;
}

getAllPair(5, [1, 2,4, 5, 6, 7,3,10]);
