class Solution {
    isValid(s) {
        let stack = [];

        for (let c of s) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                if (stack.length === 0) return false;

                let prevVal = stack.pop();

                if (prevVal === '(' && c !== ')') return false;
                if (prevVal === '[' && c !== ']') return false;
                if (prevVal === '{' && c !== '}') return false;
            }
        }

        return stack.length === 0;
    }
}