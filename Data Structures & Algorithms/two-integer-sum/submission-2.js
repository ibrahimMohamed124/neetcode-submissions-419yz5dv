class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum = (nums, target) => {
        let storage = {}
        for(let [index, num] of nums.entries()){
            if(storage[num] !== undefined) return [storage[num], index];
            storage[target - num] = index;
        }
    }
}
