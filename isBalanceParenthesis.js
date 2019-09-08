
function isBalanceParenthesis(str){
	var bracket = {
		'{' : '}', 
		'[' : ']',
		'(' : ')'
	}
	var openBracket = ['{', '[', '('];
    var stack = [];
	for (var i = 0; i < str.length; i++) {
		if(openBracket.indexOf(str[i]) > -1){
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


