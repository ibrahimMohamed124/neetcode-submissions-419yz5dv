class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            products = 1
            for j in range(len(nums)):
                if i == j:  
                    continue
                products *= nums[j]
            res.append(products) 
        return res
