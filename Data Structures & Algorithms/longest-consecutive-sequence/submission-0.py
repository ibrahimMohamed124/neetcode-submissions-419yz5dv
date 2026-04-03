import collections
def arrayCountElements(nums):
    count = 0
    for i in nums:
        count+=1
    return count

class Solution:
    def longestConsecutive(self, nums):
        if not nums:
            return 0

        num_set = set(nums)  # إزالة التكرارات
        longest = 0

        for num in num_set:  # loop على كل عنصر زي كودك
            if num - 1 not in num_set:  # نبدأ التسلسل من البداية
                current = num
                length = 1

                while current + 1 in num_set:
                    current += 1
                    length += 1

                longest = max(longest, length)

        return longest