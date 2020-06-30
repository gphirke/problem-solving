function checkNumeric(char){
    return char >=0 && char <= 9;
}

function checkLetter(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function checkEquals(str){
    if(!checkLetter(str[0])){
        return false;
    }
    var firstChar = str[0];
    for(let k=1; k<str.length; k++){
        if(firstChar != str[k]){
            return false;
        }
     }
     return true;
}

function match(str1, str2){
  let j=0;  
  for (let c=0; c<str1.length; c++){
    if(str1[c] == "$"){
       if(checkNumeric(str2[j])){
           j++;
           continue;
       }
       return false;
    }else if(str1[c] == "+"){
        if(checkLetter(str2[j])){
            j++;
            continue
        }
        return false;

    }else if(str1[c] == "*" && str1[c+1] == "{"){
        let numChars = Number(str1[c+2]);
        c = c + 3;
        if(checkEquals(str2.substr(j, numChars))){
            j = j+numChars;
            continue;
        }else{
            return false;
        };
    }else if(str1[c] == "*"){
        if(checkEquals(str2.substr(j, 3))){
            j = j +3;
            continue;
        }else {
            return false;
        }
    }
  }
  if(j != str2.length){
      return false;
  }
  return true;
}

//match("$**+*{2}", "9mmmrrrkbb") // true

match("+++++*", "abcdehhhhhh")  // false

// $ should be number 
// + should be one letter char
// * should be 3 letter char
// *{4} should be 4 letter char
