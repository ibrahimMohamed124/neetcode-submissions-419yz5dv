class Solution {

    fun longestConsecutive(nums: IntArray): Int {

        val set = nums.toHashSet()

        var longest = 0

        for (num in set) {
            if (!set.contains(num - 1)) {
                var currentNum = num
                var currentStreak = 1

                while (set.contains(currentNum + 1)) {
                    currentNum++
                    currentStreak++
                }

                longest = maxOf(longest, currentStreak)
            }
        }

        return longest
    }
}