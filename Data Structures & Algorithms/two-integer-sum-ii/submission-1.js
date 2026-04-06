class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            numbers[left] + numbers[right];

            if ((numbers[left] + numbers[right]) === target) {
                return [left + 1, right + 1]; // i-based index
            } else if ((numbers[left] + numbers[right]) > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}