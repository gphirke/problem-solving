function isPrime(num){
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) {
		return false;
	}

	if (n%2==0){
		return (n==2);
	}

	var sqrt = Math.sqrt(num);
	for (var i = 3; i < sqrt; i+=2) {
		if(num%i == 0){
			return false;
		}
	}
	
	return true;
}
