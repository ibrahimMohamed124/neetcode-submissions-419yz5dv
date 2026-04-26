class Solution {
    isValid(s) {
        let stack = [];
        let map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let c of s) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                if (stack.pop() !== map[c]) return false;
            }
        }

        return stack.length === 0;
    }
}