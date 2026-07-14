impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();

        let close_to_open: HashMap<char, char> =
            [(')', '('), ('}', '{'), (']', '[')]
                .into_iter()
                .collect();

        for c in s.chars() {
            if close_to_open.contains_key(&c) {
                if let Some(&top) = stack.last() {
                    if top == close_to_open[&c] {
                        stack.pop();
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        stack.is_empty()
    }
}
