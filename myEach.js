// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

function myEach(arr, callback) {
  
  // takes an array and a callback as arguments

  // itterate through array (for loop) and pass the folloing to the call back at each element
  //  1) The current element
  //  2) The index of the current element
  //  3) The array itself
  // No return value is necessary

  for (let i=0; i < arr.length; i++){
  	// at each element, call the callback function
  	callback(arr[i], i, arr);
  }
}

// export this function (you can ignore this for now)
module.exports = myEach;
