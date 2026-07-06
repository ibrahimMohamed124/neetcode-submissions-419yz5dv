func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)

    for i, v := range nums {
        complement := target - v

        if index, found := seen[complement]; found {
            return []int{index, i}
        }

        seen[v] = i
    }

    return nil
}

