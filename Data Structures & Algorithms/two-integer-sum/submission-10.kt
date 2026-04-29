class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val seen = mutableMapOf<Int, Int>()

        for ((index, num) in nums.withIndex()) {
            val complement = target - num
            
            if (seen.containsKey(complement)) {
                return intArrayOf(seen[complement]!!, index)
            }
            
            seen[num] = index
        }
        
        throw IllegalArgumentException("No two sum solution")
    }
}