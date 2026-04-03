class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for(const num of nums){
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const pairs = Array.from(freq.entries());
        pairs.sort((a, b) => b[1] - a[1]);

        const res = [];
        for(let i=0;i < k ;i++){
            res.push(pairs[i][0]);
        }
        return res;
    }
}
