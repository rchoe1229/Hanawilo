/**
  * ? Question Information
    * ? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    * ? You may assume that each input would have exactly one solution, and you may not use the same element twice.
    * ? You can return the answer in any order.
  * ! Example 1:
    * Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  * ! Example 2:
    * Input: nums = [3,2,4], target = 6
      Output: [1,2]
  * ! Example 3:
    * Input: nums = [3,3], target = 6
      Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {};

// Runs the method above with shown params
const numbers = [2, 3, 4, 7, 15, 11, 13];
const target = 11;
const answer = twoSum(numbers, target);

function validate(answer) {
  if (answer.includes(4) && answer.includes(7)) {
    console.log(`Your answer was ${answer} and is valid`);
  } else {
    console.log(`Your answer was ${answer} and was not valid`);
  }
}

validate(answer);
