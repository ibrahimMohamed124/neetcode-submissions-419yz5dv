class Solution {
    hasDuplicate(nums) {
        const freq = new Map();

        for (let num of nums) {
            if (freq.has(num)) {
                return true;
            }
            freq.set(num, 1);
        }

        return false;
    }
}