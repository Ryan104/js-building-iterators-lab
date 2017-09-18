function myFilter(arr, callback){
	// myFilter() - takes an array and a callback function and returns a new array that is a filtered version of the original
	// callback must return a boolean
	// loop through given array and run the callback
	// if the boolean is true -- push to the return array

	let filteredArr = [];

	for (let i=0; i < arr.length; i++){

		if ( callback(arr[i], i, arr) ) {
			filteredArr.push(arr[i]);
		}
	}

	return filteredArr;

}

module.exports = myFilter;