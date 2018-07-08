// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var length = str.length;
	var rev = [];
	for (var i = length - 1; i >= 0; i--) {
		rev.push(str[i]);
		
	}
	return rev.join("");
}

module.exports = reverse;
