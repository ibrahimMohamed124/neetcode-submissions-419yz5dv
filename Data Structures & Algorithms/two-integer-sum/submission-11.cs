public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> storage = new Dictionary<int, int>();

        for(int i =0;i<nums.Length;i++) {
            int complement = target - nums[i];
            if(storage.ContainsKey(complement)) {
                return new int[] { storage[complement], i };
            }
            storage[nums[i]] = i;
        }

        return new int[0];
    }
}
