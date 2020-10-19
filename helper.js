function toBinary(n){
    let binary = "";
    while(Math.ceil(n/2) > 0){
        binary = n%2 + binary;
        n = Math.floor(n/2);
    }
    return binary;
    //or second way is
    // return (n).toString(2);
}

console.log(toBinary(7));



function isNumeric(char){
    return char >=0 && char <= 9;
}

function isLetter(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function isAlphaNumeric(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >=0 && char <= 9);
}

function getNumberOfDigits(num){
    var count = 1;
    while(num && num > 9){
        num = Math.floor(num/10);
        ++count;
    }
    return count;
}



