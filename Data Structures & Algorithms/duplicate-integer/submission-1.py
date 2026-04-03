class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums) - 1):
            for j in range(len(nums)):
                if i != j and nums[i] == nums[j]:
                    return True
        return False