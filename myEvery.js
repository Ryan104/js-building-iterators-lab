function myEvery(arr, callback){
	// myEvery() - will return a boolean. True if all elements pass test provided in callback function, or false if any fail
	for(let i=0; i<arr.length; i++){
		if (!(callback(arr[i], i, arr))){ // if the callback's test fails (returns false)...
			return false;	// myEvery returns false
		}
	}
	return true; // return true if all elements passed callback's test (all returned true)

}

module.exports = myEvery;
