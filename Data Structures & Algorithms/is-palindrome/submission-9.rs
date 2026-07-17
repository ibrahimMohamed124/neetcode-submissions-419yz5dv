impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        if s.is_empty() {
            return true;
        }

        let chars: Vec<char> = s.chars().collect();

        let mut left = 0;
        let mut right = chars.len() - 1;

        while left < right {
            while left < right && !chars[left].is_ascii_alphanumeric() {
                left += 1;
            }

            while left < right && !chars[right].is_ascii_alphanumeric() {
                right -= 1;
            }

            if left >= right {
                break;
            }

            if chars[left].to_ascii_lowercase() != chars[right].to_ascii_lowercase() {
                return false;
            }

            left += 1;
            right -= 1;
        }

        true
    }
}