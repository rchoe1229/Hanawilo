/** 
  * Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  * Example 1
    Input: array = [1, 2, 3, 5, 6, 8, 9]
    Output: [1, 4, 9, 25, 36, 64, 81]
  * Example 2:
    Input: array = [-10, -5, 0, 5, 10]
    Output: [0, 25, 25, 100, 100]
*/

function sortedSquaredArray(array) {
  // Write your code here.
}

// Test Case
const testArray = [-10, -5, 0, 5, 10];
let testOutputArray = [0, 25, 25, 100, 100];
let answer = sortedSquaredArray(testArray);

if (answer.toString() === testOutputArray.toString()) {
  console.log("Test Case Passed");
} else {
  console.log(
    `Test Case Failed; Expected ${testOutputArray} and got ${answer}`
  );
}
