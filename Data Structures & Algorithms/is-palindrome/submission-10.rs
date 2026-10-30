impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let clean_s: String = s
        .chars()
        .filter(|c| c.is_alphanumeric())
        .collect::<String>()
        .to_lowercase();

        let reversed: String = clean_s.chars().rev().collect();

        clean_s == reversed
    }
}
