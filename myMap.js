// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

	// myMap - takes an array and a callback fuction and returns a new array that is a modified version of the input array
	// this will be done by itterating through tthe given array and calling the callback function at each element
	// The callback will be passed the current element, the index, and the whole array
	// the callback function must return something.
	// Whatever the callback returns will be pushed to the new array
	// after iteration is complete, myMap will return the new array

	const outputArr = [];

	for (let i=0; i<arr.length; i++){
		outputArr.push(callback(arr[i], i, arr));
	}

	return outputArr;

}


// export this function (you can ignore this for now)
module.exports = myMap;
