
function isBalanceParenthesis(str){
	var bracket = {
		'{' : '}', 
		'[' : ']',
		'(' : ')'
	}
  var stack = [];
	for (var i = 0; i < str.length; i++) {
		if(bracket[str[i]]){
		   stack.push(str[i]);
		}else{
		  if(bracket[stack.pop()] !== str[i]){
		    return false;
		  }
		}
	 }
	return true;
}

//isBalanceParenthesis('{[()]}');
//isBalanceParenthesis('{[(])}');
isBalanceParenthesis('{}[](){}');


