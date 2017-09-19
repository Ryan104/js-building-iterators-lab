function mySome(arr, callback){
	// mySome() - returns a boolean signifying if any element in the array passes a test posed by the callback

	for (let i=0; i<arr.length; i++){
		if (callback(arr[i], i, arr)){
			// return true as soon as we find a callback that retuns true
			return true;
		}
	}
	// if none of the elements returned true from the callback, return false
	return false;

}


module.exports = mySome;
