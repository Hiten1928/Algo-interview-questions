// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


						// SOLUTION 1


function reverseInt(n) {
	//To check the sign
	var flag = Math.sign(n);
	// To convert back to integer with all the operations
	var parsed = parseInt(n.toString().split('').reverse().join(''));
	// return back the exact the state
	return parsed*flag;
}

module.exports = reverseInt;
