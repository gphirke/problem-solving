//Programme to identify weather the two strings 
//can be made same by editing single character

function isOneEditAway(s1, s2){    
    if(s1.length === s2.length){
        return oneEditReplace(s1, s2);
    }else if(s1.length - 1 === s2.length || s1.length - 1 === s2.length){
        return oneEditInsert(s2, s1);
    }else {
        return false;
    }

}


function oneEditReplace(s1, s2){
    var oneDifference = false;
    for(let i = 0; i < s1.length; i++){
        if(oneDifference){
            return false;
        }
        if(s1.charAt(i) !== s2.charAt(i)){
            oneDifference = true;
        }
        
    }
   return oneDifference ? true : false;
   
}

function oneEditInsert(s1, s2){
    if(s1.length < s2.length){
        return oneEditInsert(s2, s1);
    }
    for(let i = 0; i < s1.length; i++){
        if(s1.charAt(i) == s2.charAt(i)){
            continue;
        }
        if(s1.charAt(i+1) !== s2.charAt(i)){
            return false;
        }  
    }
   return true;
}

isOneEditAway("pale", "pale");
