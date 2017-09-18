// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

// myReduce() - take array, callback function, and an initial value (initialized to zero) and return a single value (reduced from the array)
// the callback will have 4 possible arguments
// 1) the accumulated total so far
// 2) the current value in the iteration process
// 3) the index of the value
// 4) the original array itself
// the myReducer function should iterate through the given array from left to right and call the callback which will return a new value to be used as the accumulated value
// at the end return the accumulated value

	let startWithIndex = 0;
	let accumulation;

	if (initialValue){
		accumulation = initialValue;
	} else {
		accumulation = arr[0];
		startWithIndex = 1;
	}

	for (let i=startWithIndex; i < arr.length; i++){
		accumulation = callback(accumulation, arr[i], i, arr);
	}

	return accumulation;

}

// export this function (you can ignore this for now)
module.exports = myReduce;
