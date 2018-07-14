// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	//array to hold all the data
	const chunked = [];


									// SOLUTION 1

	var index = 0;

	while(index < array.length){
		chunked.push(array.slice(index,index + size));
		index += size;
	}



									// SOLUTION 2

	// for(let element of array){
	// 	var last = chunked[chunked.length -1];
	// 	if(!last || last.length === size){
	// 		chunked.push([element]);
	// 	}else{
	// 		last.push(element);
	// 	}
	// }

	return chunked;
}

module.exports = chunk;
