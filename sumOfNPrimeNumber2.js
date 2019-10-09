function sumOfNPrimeNumber2(num){
	var sum = 0;
	
	const isPrime = function(n){
		if (isNaN(n) || !isFinite(n) || n%1 || n<2) {
			return false;
		}

		if (n%2==0){
			return (n==2);
		}

		var sqrt = Math.sqrt(n);
		for (var i = 3; i < sqrt; i+=2) {
			if(n%i == 0){
				return false;
			}
		}

		return true;
	}

	const getNextPrime = function* (){
		let nextNumber = 2;
		while(true){
			if(isPrime(nextNumber)){
				yield nextNumber;
			}
			++nextNumber;
		}
	}

	
	const nextPrime = getNextPrime();
	for (var i = 0; i < num; i++) {
		sum = sum + nextPrime.next().value;
	}

	return sum;
}

console.log(sumOfNPrimeNumber2(3));
