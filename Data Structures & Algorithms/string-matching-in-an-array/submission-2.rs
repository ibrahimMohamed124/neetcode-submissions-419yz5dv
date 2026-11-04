impl Solution {
    pub fn string_matching(words: Vec<String>) -> Vec<String> {
        let mut result = Vec::new();

        for (i, word) in words.iter().enumerate() {
            if words.iter().enumerate()
            .any(|(j, other)| i != j && other.contains(word)) {
                result.push(word.clone());
            }
        }

        result
    }
}