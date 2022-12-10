/* Instructions:
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their 
relative order must be the same as the inital array.

Example: 
For
inputArray = ["abc", "", "aaa", "a", "zz"]
the output should be 
sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
*/

const inputArray = ["abc", "", "aaa", "a", "zz"];

function sortByLength(strs) {
  //  write code here.
  return strs.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(inputArray));
