var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
var myFilter = require('./myFilter');
var mySome = require('./mySome');
var myEvery = require('./myEvery');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

/*
myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });
*/


/* myMap */

/*
var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");
*/

/* myReduce */
/*
var input = [5, 22, 7];

var output = myReduce(input, function(total, current){
	return total + current;
});

console.log('Testing myReduce');
console.log(output); //=> 34
console.log(output === 34);
console.log('the end');
*/

/* myFilter */
/*
const input = [99,12,50,22];

const output = myFilter(input, function(num){
	return (num > 42); // filter out numbers less than 42
});

console.log(output); // => [99,50]
*/

/* mySome */
/*
const input = [99,12,50,22];

const output = mySome(input, function(num){
	return num < 13;
});

console.log(output);
*/

/* myEvery */
const input = [99,12,50,22];

const output = myEvery(input, function(num){
	return num > 11;
});

console.log(output);

