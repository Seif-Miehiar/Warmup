/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/


function twoSum(array , target){

var newArray = [];

	for ( var i = 0; i < array.length; i++){

		for ( var x = 0; x < array.length; x++){

			if( array[i] + array[x] === target){
				newArray.push(i,x)

			}
		}return newArray;
	}

}

//for loop for iterating over the array
//if condition that if array[0] + any other index should qual the target after the sum 