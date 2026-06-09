public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> storage = new Dictionary<int, int>();

        for(int i =0;i<nums.Length;i++) {
            if(storage.ContainsKey(target - nums[i])) {
                return new int[] { storage[target - nums[i]], i };
            }
            storage[nums[i]] = i;
        }

        return new int[0];
    }
}
