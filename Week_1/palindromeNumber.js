/** 
  * ? Question Information:
  * Given an integer x, return true if x is a palindrome, and false otherwise.
  * 
  * ! Example 1:
  * Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left. 
  * ! Example 2:
  * Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  * ! Example 3:
  * Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {};

// Testing
const checkCases = [121, -121, 10, 0100, 01001, 101, 55455];
const palindromeAns = [true, false, false, false, false, true, true];
let checkedCases = { passing: [], failing: [] };
for (let i = 0; i < checkCases.length - 1; i++) {
  const check = isPalindrome(checkCases[i]) === palindromeAns[i];
  if (check) {
    checkedCases.passing.push(checkCases[i]);
  } else {
    checkedCases.failing.push(checkCases[i]);
  }
}
console.log(`Passing tests: ${checkedCases.passing}`);
console.log(`Failing tests: ${checkedCases.failing}`);
