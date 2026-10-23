use std::collections::HashMap;

impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let mut dup = HashMap::new();

        for num in nums {
            if dup.contains_key(&num) {
                return true; 
            }
            dup.insert(num, ());
        }

        false 
    }
}