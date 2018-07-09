// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

var max = 0;
var maxChar = '';

const charMap = {};

for(var i=0; i<str.length; i++){
	if(!charMap[str[i]]){
		charMap[str[i]] = 1;
	}
	else{
		charMap[str[i]]++;
	}
}


	for(let char in charMap){
		if(charMap[char] > max){
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
	
}

module.exports = maxChar;
